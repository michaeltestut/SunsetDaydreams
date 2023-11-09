
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product.ts'
import axios from 'axios'
import React, { useReducer, useEffect } from 'react'
import { ApiError } from '../types/ApiError.ts'
import { getError } from '../utils.ts'
import LoadingBox from '../components/LoadingBox.tsx'
import MessageBox from '../components/MessageBox.tsx'

type State ={
    products: Product[],
    loading:boolean,
    error:string
}

type Action =
   |{ type: 'FETCH_REQUEST' }
   |{
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
   |{ 
    type: 'FETCH_FAIL' 
    payload: string 
}


const initialState: State = {
    products:[],
    loading: true,
    error:'',
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true }
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false }
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload }
      default:
        return state
    }
  }

export default function HomePage() {
    
    const[{loading, error, products}, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState)

    useEffect(()=>{
        const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'})
            try{
                const result = await axios.get('/api/products')
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            }catch (err){
                dispatch({type: 'FETCH_FAIL', payload: getError(err as ApiError)})
            }
        }
        fetchData()
    },[])
    
    return (
        loading ? (
            <LoadingBox />
            ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ) : (

        <>
            <StyledContainer>
                <Container className='mt-3'>
                    <Row>
                        {products.map((product) => (
                            <Col className="spacing" key={product.url_slug} sm={6} md={4} lg={3}>
                                <Link className='link' to ={`/product/${product.url_slug}`}>
                                    <img className="product-img" src={product.image} />
                                    <h5 className="margin">{product.name}</h5>
                                </Link>
                                <p className="margin">${product.price}</p>
                            </Col>))}
                    </Row>
                </Container>
            </StyledContainer>
        </>
        )
    )
}

const StyledContainer = styled.div`
   display:flex;
   width:100vw;
   height:100vh;
   justify-content:space-between;
   text-align:left;
   .margin{
        margin-left:20%;
   }
   

   .product-img{
        max-width: 400px;
        width: 100%;
   }
   .spacing{
    margin-right:100px;
   }
   
   .link{
    color:black;
    &:hover{
        opacity:.8;
    }
   }
   


`

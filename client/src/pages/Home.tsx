import React from 'react'
import styled from 'styled-components'
import { sampleProducts } from '../data.ts'
import { Row, Col, Container } from 'react-bootstrap'

export default function Home() {
    return (
        <StyledContainer>
            <Container className='mt-3'>
                <Row>
                    {sampleProducts.map((product) => (
                        <Col className="spacing" key={product.url_slug} sm={6} md={4} lg={3}>
                            <img className="product-img" src={product.image} />
                            <h5 className="margin">{product.name}</h5>
                            <p className="margin">${product.price}</p>
                        </Col>))}
                </Row>
            </Container>
        </StyledContainer>
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
   
   


`

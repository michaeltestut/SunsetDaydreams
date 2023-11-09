import React from 'react'
import styled from 'styled-components'
import { sampleProducts } from '../data.ts'
import { Row,Col,Container } from 'react-bootstrap'

export default function Home() {
    return (
        <StyledContainer>
            <Container className='mt-3'>
                <Row>
                    {sampleProducts.map((product) => (
                    <Col key={product.url_slug} sm={6} md={4} lg={3}>
                        <img className="product-img" src ={product.image} />
                        <h2>{product.name}</h2>
                    </Col>))}
                </Row>
            </Container>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
   display:flex;
   width:100vw;
   justify-content:space-between;

   .product-img{
        max-width: 400px;
        width: 100%;
   }
  
   
   


`

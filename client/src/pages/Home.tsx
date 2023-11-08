import React from 'react'
import Header from '../components/Header'
import MenuBar from '../components/MenuBar.tsx'
import styled from 'styled-components'
import { sampleProducts } from '../data.ts'
sampleProducts

export default function Home() {
    return (
        <Container>
            {/* <Header /> */}
            <ul>
                {sampleProducts.map((product) => (
                <li>
                    <h2>{product.name}</h2>
                    <img src ={product.image} />
                </li>))}
            </ul>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;


`

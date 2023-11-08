import React from 'react'
import styled from 'styled-components'
import logo from '../../public/images/Sunset Daydreams-pink@3x.png'
import backgroundImage from '../../public/images/Deliberate_11_A_Hyper_Realistic_Ultra_Detailed_Photograph_plan_1.jpg'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
      <Container>
        <div className='logo'>
          <Link to="/">
            <img className='logoImage' src={logo} />
          </Link>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    text-align:center;
    align-items: center;
    justify-content:center;
    height:20vh;
    width: 100vw;

    background-image: url("${backgroundImage}");
    
    .logoImage{
      width: 18vw;
    }
    


`


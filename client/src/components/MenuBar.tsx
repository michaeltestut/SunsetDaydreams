import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuBar: React.FC = () => {
    return (
        <Container>
            <div className="menu">
                <Link to="/" className='headerLink'>Home</Link>
                <Link to="/apparel" className='headerLink'>Apparel</Link>
                <Link to="/accessories" className='headerLink'>Accessories</Link>
                <Link to="/sale" className='headerLink'>SALE</Link>
            </div>
        </Container>
    )
}

export default MenuBar

const Container = styled.div`
display: flex;
justify-content:center;
background-color:white;
width:100vw;
border-top: 4px solid #89dd3d;
border-bottom: 4px solid #89dd3d;
.menu{
    display:flex;
    justify-content: space-around;
    align-items:center;
    width: 40vw;
    
}
.headerLink{
    color:#e63454;
    &:hover{
        font-weight:bold;
        text-shadow: 2px 2px 10px #e63454;
        

      }
}
`
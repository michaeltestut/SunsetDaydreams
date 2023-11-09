import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DropdownMenu from './DropdownMenu'
import 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'



const MenuBar: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const handleMouseEnter =()=>{
      setIsDropdownVisible(true);
  }
    const handleMouseLeave =()=>{
      setIsDropdownVisible(false);
  }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Container>
                <Row className="menu" sm={6} md={4} lg={4}>
                    <Link to="/" className='headerLink'>Home</Link>
                    <Link to="/apparel" className='headerLink'>Men's</Link>
                    <Link to="/accessories" className='headerLink'>Women's</Link>
                    <Link to="/sale" className='headerLink'>Accessories</Link>
                </Row>
            </Container>
            <StyledDropdown>
                <div className='dropdown'>
                    {isDropdownVisible && <DropdownMenu />}
                </div>
            </StyledDropdown>
        </div>

    )
}

export default MenuBar

const Container = styled.div`
height:100%;
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
    width: 40%;
    
    
}
.headerLink{
    color:#e63454;
    &:hover{
        font-weight:bold;
        text-shadow: 2px 2px 10px #e63454;
        

      }
}
`
const StyledDropdown = styled.div`
position:absolute;
left:41%;
display:flex;
align-items:center;
justify-content:space-evenly;
width:30vw;
background-color:rgba(243, 112, 201, .7);
padding:0;
margin:0;

`
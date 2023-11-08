import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DropdownMenu from './DropdownMenu'

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
                <div className="menu">
                    <Link to="/" className='headerLink'>Home</Link>
                    <Link to="/apparel" className='headerLink'>Men's</Link>
                    <Link to="/accessories" className='headerLink'>Women's</Link>
                    <Link to="/sale" className='headerLink'>Accessories</Link>
                </div>
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
const StyledDropdown = styled.div`
position:absolute;
left:38%;
display:flex;
align-items:center;
justify-content:space-evenly;
width:30vw;
background-color:rgba(243, 112, 201, .7);
`
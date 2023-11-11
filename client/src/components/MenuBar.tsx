import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DropdownMenu_Mens, DropdownMenu_Accessories, DropdownMenu_Womens } from './DropdownMenus'
import 'react-bootstrap'
import { Row } from 'react-bootstrap'




const MenuBar: React.FC = () => {
    const [isMensDropdownVisible, setIsMensDropdownVisible] = useState<boolean>(false);
    const handleMouseEnterMens = () => {
        setIsMensDropdownVisible(true);
    }
    const handleMouseLeaveMens = () => {
        setIsMensDropdownVisible(false);
    }

    const [isWomensDropdownVisible, setIsWomensDropdownVisible] = useState<boolean>(false);
    const handleMouseEnterWomens = () => {
        setIsWomensDropdownVisible(true);
    }
    const handleMouseLeaveWomens = () => {
        setIsWomensDropdownVisible(false);
    }

    const [isAccessoriesDropdownVisible, setIsAccessoriesDropdownVisible] = useState<boolean>(false);
    const handleMouseEnterAccessories = () => {
        setIsAccessoriesDropdownVisible(true);
    }
    const handleMouseLeaveAccessories = () => {
        setIsAccessoriesDropdownVisible(false);
    }


    return (

        <div>
            <Container>
                <Row className="menu" sm={6} md={4} lg={4}>
                    <Link to="/" className='headerLink'>Home</Link>
                    <div onMouseEnter={handleMouseEnterMens} onMouseLeave={handleMouseLeaveMens}>
                        <Link to="/mens" className='headerLink'>Men's</Link>
                        <StyledDropdown>
                            {isMensDropdownVisible && <DropdownMenu_Mens />}
                        </StyledDropdown>
                    </div>
                    <div onMouseEnter={handleMouseEnterWomens} onMouseLeave={handleMouseLeaveWomens}>
                        <Link to="/womens" className='headerLink'>Women's</Link>
                        <StyledDropdown>
                            {isWomensDropdownVisible && <DropdownMenu_Womens />}
                        </StyledDropdown>
                    </div>
                    <div onMouseEnter={handleMouseEnterAccessories} onMouseLeave={handleMouseLeaveAccessories}>
                        <Link to="/accessories" className='headerLink'>Accessories</Link>
                        <StyledDropdown>
                            {isAccessoriesDropdownVisible && <DropdownMenu_Accessories />}
                        </StyledDropdown>
                    </div>
                </Row>
            </Container>
        </div>

    )
}

export default MenuBar

const Container = styled.div`
height:100%;
display: flex;
justify-content:center;
background-color:rgba(255, 255, 255, 1);
width:100vw;
border-top: 4px solid #89dd3d;
border-bottom: 4px solid #89dd3d;
margin-top:20px;
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
display:flex;
align-items:center;
justify-content:center;;
width:10vw;
background-color:rgba(243, 112, 201, .7);



`
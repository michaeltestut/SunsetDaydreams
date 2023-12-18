import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-bootstrap";
import { Button, Badge, Row, Col, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { BsBag, BsBagFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useAppSelector } from "../redux/hooks";


const MenuBar: React.FC = () => {

  const { cartItems } = useAppSelector((state) => state.cart)
  const navigate = useNavigate();




  const [isCartHovered, setIsCartHovered] = useState<boolean>(false);
  const handleMouseEnterCart = () => {
    setIsCartHovered(true);
  };
  const handleMouseLeaveCart = () => {
    setIsCartHovered(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleHomeClick = () => {
    navigate("/")
  }

  return (
    <Border>
      <Container>
        <Row className="menu" sm={6} md={4} lg={4}>
          <Dropdown>
            <ButtonGroup>
              <Button variant="light" className="spacing" onClick={handleHomeClick}>Home</Button>
              <DropdownButton title="Mens" variant="light" className="spacing">
                <Dropdown.Item>All Mens</Dropdown.Item>
                <Dropdown.Item>T Shirts</Dropdown.Item>
                <Dropdown.Item>Tanks</Dropdown.Item>
                <Dropdown.Item>Hoodies</Dropdown.Item>
                <Dropdown.Item>Buttoned Shirts</Dropdown.Item>
                <Dropdown.Item>Swim</Dropdown.Item>
              </DropdownButton>


              <DropdownButton title="Womens" variant="light" className="spacing">
                <Dropdown.Item>All Womens</Dropdown.Item>
                <Dropdown.Item>Unisex Tees</Dropdown.Item>
                <Dropdown.Item>Crop Tops</Dropdown.Item>
                <Dropdown.Item>Sweatshirts</Dropdown.Item>
                <Dropdown.Item>Swim</Dropdown.Item>
                <Dropdown.Item>Athletic Wear</Dropdown.Item>
              </DropdownButton>


              <DropdownButton title="Accessories" variant="light" className="spacing">
                <Dropdown.Item>All Accessories</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Beach Accessories</Dropdown.Item>
                <Dropdown.Item>Mugs</Dropdown.Item>
                <Dropdown.Item>Wall Art</Dropdown.Item>
                <Dropdown.Item>Giftcards</Dropdown.Item>
                <Dropdown.Item>Other</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Dropdown>
        </Row>
        <div
          className="cart"
          onMouseEnter={handleMouseEnterCart}
          onMouseLeave={handleMouseLeaveCart}
          onMouseUp={handleCartClick}
        >
          {isCartHovered ? (
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <BsBagFill class="cartimage" />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ size: "1.5em" }}
            >
              <BsBag />
            </IconContext.Provider>
          )}
          {cartItems.length > 0 &&
            <div className="cart-amount">
              <Badge pill bg='danger'>
                {cartItems.reduce((a: any, c: any) => a + c.qty, 0)}
              </Badge>
            </div>
          }
        </div>

      </Container>
    </Border>
  );
};

export default MenuBar;

const Border = styled.div`
display:flex;
  align-items:center;
  justify-content: center;
  background: linear-gradient(to right, #89dd3d, #346841);
  padding: 4px;
`

const Container = styled.div`
  background-color:#f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items:center;

  width: 100vw;
  // border-top: 4px solid #89dd3d;
  // border-bottom: 4px solid #89dd3d;
  // margin-top: 20px;

  .spacing{
    margin-right:5em;
  }

  .menu {
    height: 3em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    background-color:#f7f7f7;
  }
  .headerLink {
    color: #e63454;
    &:hover {
      font-weight: bold;
      text-shadow: 2px 2px 10px #e63454;
    }
  }

  .cart {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 5%;
    
    &:hover {
      cursor: pointer;
      
    }
    .cart-amount {
      font-family: "Arial";
      font-weight: 600;
      
      padding:5px;
    }
  }
`;



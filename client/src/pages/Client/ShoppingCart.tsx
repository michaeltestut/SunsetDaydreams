import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { ListGroup, Col, Row, Image, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"
import styled from "styled-components";
import MetaData from "../../components/MetaData";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";


export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const { cartItems } = cart;

  const totalQty = cartItems.reduce((acc: any, item: any) => acc + item.qty, 0)

  const handleQuantityChange = async (product: any, qty: number) => {
    dispatch(addToCart({ ...product, qty }))
  }
  const handleRemoveFromCart = async (id: any) => {
    dispatch(removeFromCart(id))
  }

  const handleCheckoutClick = () => {
    navigate("/checkout")
  }

  return (
    <Container>
      <MetaData title="My Bag | Sunset Daydreams" />
      <Row>
        <Col md={8} >
          <h1>Your Bag: {totalQty} {totalQty === 1 ? " item" : " items"} </h1>
          {cartItems.length > 0 ?
            <div>
              {cartItems.map((item: any) => (
                <Row className="itemRow bottom">
                  <Col md={2}>
                    <Image src={item.images[0]} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <h4><Link className="productLink" to={`/product/${item.url_slug}`} >{item.name}</Link></h4>
                  </Col>
                  <Col md={2}>
                    ${item.price}
                  </Col>
                  <Col md={2}>
                    <p>qty:</p>
                    <Form.Control
                      as="select"
                      value={Number(item.qty)}
                      onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => handleRemoveFromCart(item._id)}><FaTrash /></Button>
                  </Col>
                </Row>
              ))}
            </div> :
            <div>
              Your bag is empty! <Link to="/">Go Home</Link> to add products
            </div>
          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              {
                cartItems.length !== 0 &&
                <>
                  <ListGroup.Item>
                    <h4>Subtotal: ${cart.itemsPrice}</h4>
                    <h4>Tax: ${cart.taxPrice}</h4>
                    <h4>Shipping: ${cart.shippingPrice}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button type='button' onClick={handleCheckoutClick}>
                      Proceed to checkout
                    </Button>
                  </ListGroup.Item>
                </>
              }
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  h1{
    text-align:center;
  }
  .itemRow{
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .productLink{
    color:black;
    &:hover{
      color:darkgrey;

  }

`

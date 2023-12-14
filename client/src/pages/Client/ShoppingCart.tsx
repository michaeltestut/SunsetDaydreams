import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { ListGroup, Col, Row, Image, Form } from "react-bootstrap";


export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);


  return (
    <div>
      <h1>Your Bag</h1>
      {cartItems.length > 0 ?
        <div>
          <ListGroup variant="flush">
            {cartItems.map((item: any) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.images[0]} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <h4><Link to={`/product/${item.url_slug}`} >{item.name}</Link></h4>
                  </Col>
                  <Col md={2}>
                    ${item.price}
                  </Col>
                  <Col md={2}>
                    <p>qty:</p>
                    <Form.Control
                      as="select"
                      value={Number(item.qty)}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div> :
        <div>
          Your bag is empty! <Link to="/">Go Home</Link> to add products
        </div>
      }
    </div>
  )
}

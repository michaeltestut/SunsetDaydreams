import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import SelectUSState from 'react-select-us-states';
import { useAppSelector } from '../../redux/hooks';


const Checkout: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Container>
      <h2>Checkout</h2>
      <Row>
        <Col md={6}>
          <h3>Shipping Info</h3>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Street Address</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Street Address 2 (optional) </Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <div className='city-state-zip'>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='state'>
                <Form.Label>State</Form.Label>
                <SelectUSState />
              </Form.Group>
              <Form.Group className='zip'>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
            </Form.Group>

          </Form>
        </Col>

        <Col md={6}>
          <div>
            <h3>
              Order Summary
            </h3>
          </div>
          <div>
            Subtotal: ${cart.itemsPrice}
          </div>
          <div>
            Shipping Cost: ${cart.shippingPrice}
          </div>
          <div>
            Sales Tax: ${cart.taxPrice}
          </div>
          <div className='total'>
            Total: ${cart.totalPrice}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout


const Container = styled.div`
  h2{
    text-align: center;
  }

  .state{
    display:flex;
    flex-direction:column;
    padding-bottom:5px;
    margin-left:10px;
  }

  .zip{
    margin-left:10px;
  }

  .city-state-zip{
    display:flex;
    flex-direction:row;
  }

  .total{
    border-top:1px solid grey;
    border-bottom:1px solid grey
  }
`
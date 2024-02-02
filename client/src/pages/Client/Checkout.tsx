import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks';
import ShippingForm from '../../components/ShippingForm';

const Checkout: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  const [shippingHidden, setShippingHidden] = useState<boolean>(false)

  const handleButtonClick = () => {
    shippingHidden ? setShippingHidden(false) : setShippingHidden(true);
    console.log(shippingHidden)
  }



  return (
    <Container>
      <h2>Checkout</h2>
      <Row>
        <Col md={6} className="column">
          {!shippingHidden ?
            <>
              <h4 className="label">Step 1 - Shipping Info</h4>
              <ShippingForm />
              <Button onClick={handleButtonClick}>Continue to Payment</Button>
            </>
            :
            <>
              <h4 className='label'>Step 2 - Payment Info</h4>
              <h3>This will be the payment area</h3>
              <Button onClick={handleButtonClick}>Edit Shipping Info</Button>
            </>
          }
        </Col>

        <Col md={6}>
          <div>
            <h5>
              Order Summary
            </h5>
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

  .label{
    background-color:lightgrey;
    padding:3px;
  }

  .column{
    padding:0 40px;
    border-right:1px solid grey;
  }
`
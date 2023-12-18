import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'


const Checkout: React.FC = () => {
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
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout


const Container = styled.div`

`
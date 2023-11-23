import { Form, Button } from 'react-bootstrap'

export default function AddProduct() {
  return (
    <div>
      <h4> Add New Product</h4>
      <Form>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control  type='text' placeholder='Enter Product Name'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control  type='number' placeholder='Enter Price'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Images</Form.Label>
            <Form.Control  type='file' placeholder='Upload Images'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control  type='textarea' placeholder='Enter Description'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>In Stock</Form.Label>
            <Form.Control  type='number' placeholder='Enter Count In Stock'/>
          </Form.Group>
        <Button variant="primary" type="submit">
          Create Product
        </Button>
      </Form>

    </div>
  )
}

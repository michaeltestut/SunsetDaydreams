import { Form, Button } from 'react-bootstrap'

export default function AddProduct() {
  return (
    <div>
      <h4> Add New Product</h4>
      <Form>
        
        <Button variant="primary" type="submit">
          Create Product
        </Button>
      </Form>

    </div>
  )
}

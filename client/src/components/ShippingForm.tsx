import { Button, Form } from "react-bootstrap"
import SelectUSState from 'react-select-us-states';

const ShippingForm: React.FC = () => {
    return (
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
            {/* <Button variant='outline-dark' onClick={}>
                Continue to Payment
            </Button> */}
        </Form>
    )
}

export default ShippingForm;
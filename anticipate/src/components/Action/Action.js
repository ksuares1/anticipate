import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormComponent = () => {
    return (
        <div>
        <Form>
            <h1> Contact Us </h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="outline-dark">Submit</Button>{' '}
            
        </Form>
        </div>
    )
}

export default FormComponent;
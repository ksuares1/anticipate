import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'



SignupComponent= () => {
    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label className="text-align:center">Usernmae</Form.Label>
                <Form.Control type="username" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label className="text-align:center">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form>

    )
}
export default SignupComponent;
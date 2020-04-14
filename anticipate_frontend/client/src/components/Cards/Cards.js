import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const CardComponent = () => {
    return (
        <CardDeck>
            <Card className="first-card">
                <Card.Img variant="top" src={require("../../assets/img/nurse-patient.jpg")} />
                <Card.Body>
                    <Card.Title className="nurse-card">Nurse</Card.Title>
                    <Card.Text>
                        <p className="text-center"> Seamlessly check-in with your patients.</p>
                        {/* <Button bstyle="default" style={{}} className="login-button" variant="outline-dark">Login</Button>{' '} */}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="second-card">
                <Card.Img variant="top" src={require("../../assets/img/family.jpg")} />
                <Card.Body>
                    <Card.Title className="text-center">Family</Card.Title>
                    <Card.Text>
                        <p className="text-center">Keep track of your family members medications.</p>
                        <Button variant="outline-dark">Track</Button>{' '}
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>
    )
}
export default CardComponent;


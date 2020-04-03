import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const CardComponent = () => {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={require("../../assets/img/nurse-patient.jpg")} />
                <Card.Body>
                    <Card.Title>Nurse</Card.Title>
                    <Card.Text>
                        <p> Seamlessly check-in with your patients.</p>
                        <Button variant="outline-dark">Login</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require("../../assets/img/family.jpg")} />
                <Card.Body>
                    <Card.Title>Family</Card.Title>
                    <Card.Text>
                        <p>Keep track of your family members medications.</p>
                        <Button variant="outline-dark">Track</Button>{' '}
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>
    )
}
export default CardComponent;


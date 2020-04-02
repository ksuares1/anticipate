import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const CardComponent = () => {
    return (
        <CardDeck>
        <Card>
            <Card.Img variant="top" src={require("../../assets/img/nurse-patient.jpg")} />
            <Card.Body>
                <Card.Title>Nurse</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../../assets/img/family.jpg")}  />
            <Card.Body>
                <Card.Title>Family</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
        content.{' '}
                </Card.Text>
            </Card.Body>
            
        </Card>
  </CardDeck>
    )
}
export default CardComponent;


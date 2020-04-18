import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import {Link} from "react-router";

const CardComponent = () => {
    return (
        <CardDeck>
            <Col md={5}>
                <Card className="first-card text-center">
                    <Card.Img top width="100%" className="nurse-image" variant="top" src={require("../../assets/img/nurse-lab.jpg")} />
                    <Card.Body>
                        <Card.Title className="nurse-card">Nurse</Card.Title>
                        <Card.Text>
                            <p className="text-center"> Seamlessly check-in with your patients.</p>
                            <Button bstyle="default" className="login-button" variant="outline-dark">Login</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
    
            <Col md={5}>
                <Card className="second-card text-center" >
                    <Card.Img className="patient-image" variant="top" src={require("../../assets/img/nurse-patient.jpg")} />
                    <Card.Body>
                        <Card.Title className="text-center">Patient</Card.Title>
                        <Card.Text>
                            <p className="text-center"> Nurses can quickly and securely see  the latest medicial updates on their patients.</p>
                        </Card.Text>
                        <Button variant="outline-dark">Track</Button>
                    </Card.Body>
                </Card>
            </Col>
        </CardDeck>
    )
}
export default CardComponent;


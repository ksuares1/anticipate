import React from "react";
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ViewFamily () {
    return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
                <Image src={require("../../assets/img/Tomato.jpg")} thumbnail />
            </Col>
            </Row>
            <Row>
    <div>{}</div>
            </Row>
           
        </Container>

    )
}
export default ViewFamily;
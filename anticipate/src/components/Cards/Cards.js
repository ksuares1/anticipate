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

export const Vitals = () => {
  return (
      <div>
    <CardDeck>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src={require("../../assets/img/heart-icon.jfif")} />
  <Card.Body>
    <Card.Header>Heart Rate</Card.Header>
    <Card.Text>
      Heart Rate Goes Here: 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src={require("../../assets/img/oxygen-icon.png")} />
  <Card.Body>
    <Card.Header>Oxygen Levels</Card.Header>
    <Card.Text>
    Oxygen Levels Goes Here:
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src={require("../../assets/img/thermometer-icon.png")} />
  <Card.Body>
    <Card.Header>Temperature</Card.Header>
    <Card.Text>
    Temperature Goes Here: 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src={require("../../assets/img/blood-pressure.png")} />
  <Card.Body>
    <Card.Header>Blood Pressure</Card.Header>
    <Card.Text>
      Blood Pressure Goes Here: 
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>
  );
}
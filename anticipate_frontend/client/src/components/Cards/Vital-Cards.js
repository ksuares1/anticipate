import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



 

function Vitals() {

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
 


export default Vitals;
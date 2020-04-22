import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { MDBContainer, MDBAlert } from 'mdbreact';
// import TeamComponent from '../Nurse/Team';
//  import Microphone from "../../pages/Mic.js";

function showMic() {
    return (
        <main>
            <Jumbotron className="readygo-info" fluid>
                <Container>
                    <h1>Ready Go</h1>
                    <p>Staying connected with patients is important throughout the duration of their hospital stay and out-patient care.
                     Anticipate's voice recording system called Ready Go helps nurses to quickly send text messages to patients, so they can care for mutiple patients at a time. </p>
                </Container>
            </Jumbotron>

            <br>
            </br>
            {/* <MDBContainer className="team-container">
                <MDBAlert color="light" >
                    <h1>Meet the Team</h1>
                    <br>
                    </br>
                    <h2 className="picture-one"> Kimberly Suares</h2>
                    <img className="picture-one d-circle w-25" src={require("../../assets/img/Kimberly.JPG")} alt="Kimberly Suares" />
                    <p>Full Stack Web Developer</p>
                    
                    <h2> Miriam Duverge</h2>
                    <img className="d-circle w-25" src={require("../../assets/img/Mia.png")} alt="Mia" />
                    <p></p>
                    </MDBAlert>
      </MDBContainer> */}
    );
            <br>
            </br>
            <Jumbotron className="coming-soon">
                <h1>Coming Soon</h1>
                <p>At Anticipate we understand how important the ability to communicate with family members and medical staff is to patients. As our application continues to grow, we will add new features such as the ability for family members to send pictures and text messages to patients.</p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </main>
    )
}

export default showMic;
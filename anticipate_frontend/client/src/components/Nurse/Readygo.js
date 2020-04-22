import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
// import TeamPage from '/Team';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { MDBContainer, MDBAlert, MDBRow, MDBCol } from 'mdbreact';
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
                    <MDBRow>
                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <img className="picture-one d-circle w-25" src={require("../../assets/img/Kimberly.JPG")} className="rounded z-depth-1-half img-fluid" alt="Kimberly Suares" />
                    <h5 className="font-weight-bold mt-4 mb-3"> Kimberly Suares</h5>
                    <p>Full Stack Web Developer</p>
            </MDBCol>
            </MDBRow>
           
                    <MDBRow >
                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <img className="mia-info d-circle w-5" src={require("../../assets/img/Mia.png")} alt="Mia" />
                    <h5> Miriam Duverge</h5>
                    <p>Full Stack Engineer</p>
                    <p></p>
                     </MDBCol>
                     </MDBRow>
                    </MDBAlert>
 </MDBContainer> */}
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
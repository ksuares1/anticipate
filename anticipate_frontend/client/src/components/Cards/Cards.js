// import React from "react";
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import {Link} from "react-router";

import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const CardComponent = () => {
  return (
    <MDBCardGroup className="text-align:center">
      <MDBCard>
        <MDBCardImage src={require("../../assets/img/nurse-lab.jpg")} alt=" Nurse" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Nurse</MDBCardTitle>
          <MDBCardText>
          Seamlessly check-in with your patients.
          </MDBCardText>
          <MDBBtn href="/login" color="primary" size="md">
            Login
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="text-align:center">
        <MDBCardImage src={require("../../assets/img/family.jpg")} alt="Family" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle  tag="h5">Family</MDBCardTitle>
          <MDBCardText>
            Connecting to our love one's when is an important part of their health journey. 
            Login to your account to view the latest medications being administered to your family member. 
          </MDBCardText>
          <MDBBtn href="/family" color="primary" size="md">
            Track
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={require("../../assets/img/nurse-patient.jpg")} alt= "Nurse with patient" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Patient</MDBCardTitle>
          <MDBCardText>
          Nurses can quickly and securely see  the latest medicial updates on their patients.
          </MDBCardText>
          <MDBBtn  href="/patient" color="primary" size="md">
            Update
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default CardComponent;




// const CardComponent = () => {
//     return (
//         <CardDeck>
//             <Col md={5}>
//                 <Card className="first-card text-center">
//                     <Card.Img top width="100%" className="nurse-image" variant="top" src={require("../../assets/img/nurse-lab.jpg")} />
//                     <Card.Body>
//                         <Card.Title className="nurse-card">Nurse</Card.Title>
//                         <Card.Text>
//                             <p className="text-center"> Seamlessly check-in with your patients.</p>
//                             <Button  href="/login" bstyle="default" className="login-button" variant="outline-dark">Login</Button>
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </Col>
            
    
//             <Col md={5}>
//                 <Card className="second-card text-center" >
//                     <Card.Img className="patient-image" variant="top" src={require("../../assets/img/nurse-patient.jpg")} />
//                     <Card.Body>
//                         <Card.Title className="text-center">Patient</Card.Title>
//                         <Card.Text>
//                             <p className="text-center"> Nurses can quickly and securely see  the latest medicial updates on their patients.</p>
//                         </Card.Text>
//                         <Button  href="/patient" variant="outline-dark">Track</Button>
//                     </Card.Body>
//                 </Card>
//             </Col>
//         </CardDeck>
//     )
// }
// export default CardComponent;


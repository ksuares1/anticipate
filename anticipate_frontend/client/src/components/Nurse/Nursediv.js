import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Nurse() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-align:center">Nurses, doctors, and medical professionals are the heroes of the world!</h1>
        <p> Please login to the Anticipate portal to gain access our database.
    </p>
      </Container>
    </Jumbotron>
  )
}

export default Nurse;
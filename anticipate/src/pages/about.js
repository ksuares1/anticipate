import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const AboutComponent = () => {
    return(
        <Jumbotron fluid>
  <Container>
    <h1>Nurses are the champions of the world!</h1>
    <p>
     Please login to the nurse portal to gain access to the patient database.
    </p>
  </Container>
</Jumbotron>

    )
    }

    export default AboutComponent;

import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const AboutComponent = () => {
    return(
        <Jumbotron fluid>
  <Container>
    <h1>Nurses are the champions of the world!</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

    )
    }

    export default AboutComponent;

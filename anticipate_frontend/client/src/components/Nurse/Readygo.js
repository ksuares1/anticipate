import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
            <Jumbotron className="coming-soon">
                <h1>Coming Soon</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
  </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </main>
    )
}

export default showMic;
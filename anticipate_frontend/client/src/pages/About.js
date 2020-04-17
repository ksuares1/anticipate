import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Microphone from '../pages/Mic.js';

const AboutComponent = () => {
    return (
        <main className="readygo-demo">
            <Jumbotron fluid>
                <Container>
                    <h1 className="about-headline">Mission </h1>
                    <p>Anticipate was created on March 28, 2020 to help nurses and medical professionals connect and communicate with their patients.
                    We believe that communication and transparency plays a vital role in patients overall health.</p>
                    <p> Our app was created with the intention of creating smart rooms for hospitals.
                    Anticipate 
                         </p>
                </Container>
            </Jumbotron>

            <br>
            </br>
            <div>
                <br>
                </br>
                <img src={require("../assets/img/Ready-Go.png")} alt="ReadyGo" />
                <div className="readygo-mic">
                    <Microphone />
                </div>
            </div>
        </main>

    )
}


export default AboutComponent;

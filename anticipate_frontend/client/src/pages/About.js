import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const AboutComponent = () => {
    return (
        <main>
        <Jumbotron fluid>
            <Container>
                <h1>Mission </h1>
                <p>
                    Anticipate was created on March 28, 2020 to help nurses and medical professionals connect and communicate with their patients.
                    We believe that communication and transparency plays a vital role in patients overall health.
                    Our app was created with the intention of creating smart rooms for hospitals. Imagine having a family member, who is placed in isolation at a hospital, and you are not being able to see or communicate with them.
                    Anticipate attempts to solve this by providing information such as medications family members are on and pictures that nurses can share with you.
                         </p>
            </Container>
        </Jumbotron>


    <Jumbotron fluid>
        <Container>
            <h1>Ready Go</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
        </Container>
    </Jumbotron>
</main>

    )
}


export default AboutComponent;

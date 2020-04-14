import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const AboutComponent = () => {
    return (
        <main>
        <Jumbotron fluid>
            <Container>
                <h1 className="text-center">Mission </h1>
                <p>
                    Anticipate was created on March 28, 2020 to help nurses and medical professionals connect and communicate with their patients.
                    We believe that communication and transparency plays a vital role in patients overall health.</p>
                   <p> Our app was created with the intention of creating smart rooms for hospitals. 
                       Imagine having a family member, who is placed in isolation at a hospital, and you are not able to see or communicate with them.
                    Anticipate attempts to solve this by providing information such as medications that patients are on to their family members, and  
                         </p>
            </Container>
        </Jumbotron>


    <Jumbotron fluid className="readygo-info">
        <Container>
            <h1 className="text-center">Ready Go</h1>
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

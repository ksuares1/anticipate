import React from "react";
import SignupComponent from "../components/Nurse/Signup.js";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const SignComponent = () => {
    return (
        <div>
            <Jumbotron className="sign-wrapper" fluid>
                <Container>
                    <h1>Anticipate </h1>
                    <p>This app was developed to help you help others by making your patients latest vitals and medications securely accessible; in addition to giving you the ability to send voice messages directly to your patients."
                        </p>
                    <p>
                        Please sign-up for Anticipate to create your account!
                    </p>
                </Container>
            </Jumbotron>
            <br>
            </br>
            <SignupComponent />
        </div>
    )

}

export default SignComponent;
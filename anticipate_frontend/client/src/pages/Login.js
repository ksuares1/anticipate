import React from "react";
import LoginComponent from "../components/Nurse/Login.js";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function showNurse() {
    return (
        <div>
            <Jumbotron fluid className="login-jumbo">
                <Container>
                    <h1 className="text-align:center">Nurses, doctors, and medical professionals are the heroes of the world!</h1>
                    <p className="text-align:center"> Please login to your Anticipate account to gain access our database.</p>
                </Container>
            </Jumbotron>
            <br>
            </br>
            <LoginComponent />

        </div>

    )
}

export default showNurse;
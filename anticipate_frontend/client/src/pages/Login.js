import React from "react";
import LoginComponent from "../components/Nurse/Login.js";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function showNurse() {
    return (
        <div className="login-bg">
            <Jumbotron fluid className="login-jumbo">
                <Container>
                    <h1>Nurses are the heroes of the world!</h1>
                    <p> Please login to your Anticipate account to gain access our database.</p>
                </Container>
            </Jumbotron>
            <br>
            </br>
            <div>
            <LoginComponent />
            </div>

        </div>

    )
}

export default showNurse;
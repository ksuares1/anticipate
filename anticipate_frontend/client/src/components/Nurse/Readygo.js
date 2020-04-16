import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
import Microphone from "../../pages/Mic.js";

function showMic() {
    return (
        <main className="readygo">
        {/* <div className="mic-page" >
            <Jumbotron fluid>
                <Container>
                    <h1>Ready Go</h1>
                    <p>Staying connected with patients is important throughout the duration of their hospital stay and out-patient care.
                     Ready Go helps nurses to quickly send text messages to patients, so they can care for mutiple patients at a time. </p>
                </Container>
            </Jumbotron>
           
        </div> */}
        <div clasName="readygo-demo">
        <br>
        </br>
       <img src={require("../../assets/img/Ready-Go.png")} alt="ReadyGo"/>
        <Microphone/>
        </div>
        </main>
    )
}

export default showMic;
import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List/ptlist.js";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Microphone from "./Mic";
import Microphone from "./Mic.js";
import Image from 'react-bootstrap/Image';

// import { List } from "../components/List/ptlist";


class Detail extends Component {
    state = {
      patient: []
    };

componentDidMount() {
    API.getPatient(this.props.match.params.id)
      .then(res => this.setState({ patient: res.data }))
      .catch(err => console.log(err));
  }

  render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>
                            {this.state.patient.name}
                        </h1>
                        
                       <Image src={require("./../assets/img/Tomato.jpg")} thumbnail />
                       
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                     <List>
                     <ul>
                       <li>Location: {this.state.patient.location}</li>
                       <li>MRN: {this.state.patient.mrn}</li>
                       <li>Medications: {this.state.patient.medications}</li>
                       <li>Heart Rate: {this.state.patient.heartRate}</li>
                       <li>Oxygen Levels: {this.state.patient.oxygenLevel}</li>
                       <li>Temperature: {this.state.patient.temperature}</li>
                       <li>Blood Pressure: {this.state.patient.bloodPressure}</li>
                       

                    </ul>
                     </List>
                    </Col>
                </Row>
                <Row>
                    <Microphone />
                </Row>
            </Container>
        )
  }

}
export default Detail;
import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List/ptlist.js";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

class Patients extends Component {
    state = {
        name: "",
        mrn: "" ,
        heartRate:[],
        oxygenLevel:[],
        temperature:[],
        bloodPressure:[], 
        medications: {medicationSchema: []}, 
        location: "",
        familyContact: {contactSchema: []}, 
        // image: {patientImg}

    };

    componentDidMount() {
        this.loadPatients();
    }

    loadPatients = () => {
        API.getPatients()
        .then(res =>
        this.setState({patients: res.data, 
            name: "", 
            mrn:"", 
            heartRate:[],
            oxygenLevel:[],
            temperature:[],
            bloodPressure:[], 
            medications: {medicationSchema: []}, 
            location: "",
            familyContact: {contactSchema: []}, 
            // image: {patientImg} 
        })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6 sm-12">
                        <h1>Patients in Units</h1>
                        {this.state.patients ? (
                            <List>
                                {this.state.patients.map(patient => (
                                    <ListItem key={patient._id}>
                                        <Link to={"/patients/" + patient._id}>
                                            <strong>
                                                {patient.name}
                                                {patient.mrn}
                                                {patient.location}
                                            </strong>
                                        </Link>
                                    </ListItem>
                                    ))}
                            </List>
                                
                        ) : (
                            <h3>No Patients to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Patients;
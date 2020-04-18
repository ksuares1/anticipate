import React, { Component } from "react";
import API from "../utils/API";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Microphone from "./Mic.js";
import Image from 'react-bootstrap/Image';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn} from "mdbreact";






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
                     <h4>MRN: {this.state.patient.mrn}</h4>
                   </Col>
                </Row>

                <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Medications</th>
          <th>Heart Rate</th>
          <th>Oxygen Level</th>
          <th>Temperature</th>
          <th>Blood Pressure</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{this.state.patient.medications}</td>
          <td>{this.state.patient.heartRate}</td>
          <td>{this.state.patient.oxygenLevel}</td>
          <td>{this.state.patient.temperature}</td>
          <td>{this.state.patient.bloodPressure}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
                <MDBRow>
                <MDBCol md="12" className="mb-4">
                <MDBCard color="indigo" text="white" className="text-center">
        <MDBCardBody>
                <Microphone />
        </MDBCardBody>
      </MDBCard>
                </MDBCol>
                </MDBRow>
                <Col size="md-12">
                <Image src={require("./../assets/img/Tomato.jpg")} thumbnail />
                </Col>
                
                <MDBCol size="md-12">
                <MDBCard color="indigo">
                    <MDBCardBody className="text-center">Family Contact
                          <ul>
                             <li>Contact Name: {this.state.patient.contactName}</li>
                             <li>Relationship: {this.state.patient.contactType}</li>
                             <li>Phone Number: {this.state.patient.contactNumber}</li>
                          </ul>
                    
                    </MDBCardBody>
              </MDBCard>
              
                </MDBCol>
                
            </Container>
            
        )
  }

}
export default Detail;
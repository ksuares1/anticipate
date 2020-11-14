import React, { Component } from "react";
import ViewFamily from '../components/Cards/Family-Cards.js';
import Microphone from "./Mic.js";
import API from "../utils/API";
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn, MDBContainer} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class showFamily extends Component  {

  state = {
    patient: []
  };

 componentDidMount() {
  API.getPatient(this.props.match.params.id)
    .then(res => this.setState({ patient: res.data }))
    .catch(err => console.log(err));
};
render() {
  return (
    <MDBContainer>
      <MDBCol>
      <ViewFamily />
      </MDBCol>
      <MDBCardBody>
      <Microphone />
      </MDBCardBody>
      
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
  </MDBContainer>
  )
}
}
export default showFamily;
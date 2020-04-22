import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List/ptlist.js";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class Patients extends Component {
    state = {
        patients: [],
        

    };

    componentDidMount() {
        this.loadPatients();
    }

    loadPatients = () => {
        console.log("loadPatients");
        API.getPatients()
        .then(res => this.setState({
            patients: res.data, 
            name: "", 
            mrn:"", 
            location: "",

        })
        )
        .catch(err => console.log(err));
    };
   
   
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6 sm-12">
                        <h1>Patients in Unit</h1>
                      
                            <List>
        
                            {this.state.patients.length ? this.state.patients.map(patient => (
                                    <ListItem key={patient._id}>
                                        <Link to={"/patients/" + patient._id}>
                                        <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>MRN</th>
          <th>Location</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{patient.name}</td>
          <td>{patient.mrn}</td>
          <td>{patient.location}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
                                            
                                        </Link>
                                    </ListItem>
                                    )):
                                    <div/>
                            } 
                            </List>
                                
                            {/* <h3>No Patients to Display</h3>
                        )} */}
                    </Col>
                </Row>
             
            </Container>
        )
    }
}

export default Patients;
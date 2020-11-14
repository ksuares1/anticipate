import React from "react";
import axios from "axios";
// import Col from "react-bootstrap/Col";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })

    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })

    }

    handleSubmit(event) {
        console.log('sign-up handleSubmit, username:', this.state.username, this.state.password);
        event.preventDefault()

        axios.post("/api/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('login successful')
                    this.setState({ //redirect to login page
                        redirectTo: '/patients'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }
    render() {
        return (

            <div className="center">
            <MDBRow className="d-flex justify-content-center">
            <MDBCol md={20}>
            <form className="form-box" onSubmit={this.handleSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
            <label>Username:</label>
        <MDBInput getValue={this.state.username} onChange={this.handleUsername} icon="envelope" group type="text" validate error="wrong"
          success="right" />
          <label> Password: </label>
        <MDBInput getValue={this.state.password} onChange={this.handlePassword} icon="lock" group type="password" validate />
         </div>
         <div className="text-center">
                <MDBInput href="/patients" type="submit" value="Log In" />
                </div>

            </form>  
         </MDBCol>
         </MDBRow>
         </div>

            /* <Col md={20} className="login-box">
                <h4 className="login">Login</h4>
                <form className="form-box" onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} />

                    <label> Password:</label>
                    <input type="text" value={this.state.password} onChange={this.handlePassword} />
                    <input type="submit" value="Submit" />
                </form>
            </Col> */
        );
    }
}


export default LoginComponent;
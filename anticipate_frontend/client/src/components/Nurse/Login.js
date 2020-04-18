import React, {Fragment} from "react";
import axios from "axios";
// import { MDBInput } from 'mdbreact';
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

    handleUsername=(event)=>{
        this.setState({username:event.target.value})

    }
    
    handlePassword=(event)=>{
        this.setState({password:event.target.value})

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
            <MDBCol md="6">
            <form className="form-box" onSubmit={this.handleSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
        <MDBInput label="Type your username"  getValue={this.state.username} onChange={this.handleUsername} icon="envelope" group type="text" validate error="wrong"
          success="right" />
        <MDBInput label="Type your password" getValue={this.state.password} onChange={this.handlePassword} icon="lock" group type="password" validate />
         </div>

                <div className="text-center">
                <MDBInput type="submit" value="Submit" />
                </div>
                
            </form>  
         </MDBCol>
         </MDBRow>
         </div>

        );
    }
}


export default LoginComponent;
import React from "react";
import axios from "axios";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFullname = (event) =>{
        this.setState({ fullname: event.target.value })
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })

    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })

    }

    handleSubmit(event) {
        console.log('sign-up handleSubmit, username:');
        console.log(this.state.username)
        event.preventDefault()

        axios.post("/api/signup", {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        redirectTo: '/login'
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
            <div className="signup-box">
                <h4 className="text-align:center">Sign-Up</h4>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Full Name:
            <input type="text" value={this.state.fullname} onChange={this.handleFullname}
                    />
                </label>
            
                <label>
                    Username:
            <input type="text" value={this.state.username} onChange={this.handleUsername}
                    />

                </label>

                <label>
                    Password:
              <input type="text" value={this.state.password} onChange={this.handlePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}


export default SignupComponent;
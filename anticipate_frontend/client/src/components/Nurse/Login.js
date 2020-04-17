import React from "react";
import axios from "axios";

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
                        redirectTo: '/vitals'
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
            <form className="form-box" onSubmit={this.handleSubmit}>
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
        );
    }
}


export default LoginComponent;
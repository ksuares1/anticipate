import React from "react";
import axios from "axios";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('sign-up handleSubmit, username:');
        console.log(this.state.username)
        event.preventDefault()
    
    axios.post('/user/', {
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
        }).catch (error => {
    console.log('signup error: ')
    console.log(error)


render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
                Password:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
  }


export default SignupComponent;
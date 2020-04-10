import React from "react";
import axios from "axios";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                
                <label>
                    Password:
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default SignupComponent;
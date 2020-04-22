import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import {MDBRow, MDBInput, } from 'mdbreact';

class SignupComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "",
            password: "",
         
        }
        // event.preventDefault()
        

        axios.post("/api/signup", {
            username: this.state.username,
            password: this.state.password
        })
    }
    render() {
        return (
            <div className="center">
                <MDBRow className="d-flex justify-content-center">
                    <Col md={20} className="signup-box">
                        <h4 className="signup">Sign-Up</h4>
                        <form onSubmit={this.handleSubmit}>
                            <br>
                            </br>
                            {/* <label> Full Name: </label>
                                    <MDBInput type="text" getValue={this.state.fullname} onChange={this.handleFullname} />
                                    <input type="text" value={this.state.fullname} onChange={this.handleFullname}	 */}

                            <MDBInput type="text" getValue={this.state.username} onChange={this.handleUsername} />

                            {/* <label> Username: </label> */}
                            {/* <input type="text" value={this.state.username} onChange={this.handleUsername} /> */}
                            {/* <label> Password: </label> */}
                          
                           <MDBInput type="text" group type="password" getValue={this.state.password} onChange={this.handlePassword} />
                            
                            <MDBInput type="submit" value="Submit" />
                            {/* <input type="submit" value="Submit" /> */}
                        </form>
                    </Col >
                </MDBRow >
            </div >
        );
    }
}
export default SignupComponent;


    // class SignupComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // fullname: "",
//             username: "",
//             password: "",
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     // handleFullname = (event) =>{
//     //     this.setState({ fullname: event.target.value })
//     // }

//     handleUsername = (event) => {
//         this.setState({ username: event.target.value })

//     }

//     handlePassword = (event) => {
//         this.setState({ password: event.target.value })

//     }

//     handleSubmit(event) {
//         console.log('sign-up handleSubmit, username:');
//         console.log(this.state.username)
//         event.preventDefault()

//         axios.post("/api/signup", {
//             // fullname: this.state.fullname,
//             username: this.state.username,
//             password: this.state.password
//         })
//             .then(response => {
//                 console.log(response)
//                 if (!response.data.errmsg) {
//                     console.log('successful signup')
//                     this.setState({ //redirect to login page
//                         redirectTo: '/login'
//                     })
//                 } else {
//                     console.log('username already taken')
//                 }
//             }).catch(error => {
//                 console.log('signup error: ')
//                 console.log(error)

//             })
//     }
//     render() {
//         return (
//             <Col md={20} className="signup-box">
//                 <h4 className="signup">Sign-Up</h4>
//             <form onSubmit={this.handleSubmit}>
//                 {/* <label> Full Name: </label> */}
//             {/* <input type="text" value={this.state.fullname} onChange={this.handleFullname}/> */}
//                 <label>Username:</label>
//             <input type="text" value={this.state.username} onChange={this.handleUsername}/>

//                 <label> Password:     </label>
//               <input type="text" value={this.state.password} onChange={this.handlePassword} />
//             <input type="submit" value="Submit" />
//             </form>
//             </Col>
//         );
//     }
// }



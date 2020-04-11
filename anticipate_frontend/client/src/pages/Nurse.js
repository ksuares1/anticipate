import React from "react";
import Nurse from "../components/Nurse/Nursediv.js";
import LoginComponent from "../components/Nurse/Login.js";
// import SignupComponent from "../components/Nurse/Signup.js";



function showNurse() {
    return (
        <div>
            <Nurse />
            <LoginComponent />
            {/* <SignupComponent/> */}

        </div>

    )
}

export default showNurse;
import React from "react";
import Nurse from "../components/Nurse/Nursediv.js";
import LoginComponent from "../components/Nurse/Login.js";


function showNurse() {
    return (
        <div>
        <Nurse/>
        <div>
            <LoginComponent/>
            </div>
        </div>
    
    )
}

export default showNurse;
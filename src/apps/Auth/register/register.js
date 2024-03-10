import React from 'react';
// import logo from "../images/geeksLogo.svg";
import SignUp from "./SignUp";
import "../styles/loginStyle.css"
const Register = () => {


    return (
        <div className="registerPage">
            {/*<div className="header">*/}
            {/*    <img src={logo} alt="geeksLogo"/>*/}
            {/*</div>*/}
            <div className="content">
                <div className="content-text">
                    <h1>Geeks Online</h1>
                    <h3>Образовательная платформа для организации учебного процесса</h3>
                </div>
                <SignUp/>
            </div>
        </div>
    );
};

export default Register;
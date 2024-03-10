import React from 'react';
import "../styles/loginStyle.css"
// import logo from '../images/geeksLogo.svg'
import SignIn from "./SignIn";
const Login = () => {
    return (
        <div className="loginPage">
            {/*<div className="header">*/}
            {/*    <img src={logo} alt="geeksLogo"/>*/}
            {/*</div>*/}
            <div className="content">
                <div className="content-text">
                    <h1>Geeks Online</h1>
                    <h3>Образовательная платформа для организации учебного процесса</h3>
                </div>
                <SignIn/>
            </div>
        </div>
    );
};

export default Login;
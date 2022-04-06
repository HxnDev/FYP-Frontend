import React from "react"
import loginimage from "../images/login.svg"
import "./Login.css"
import { Link } from 'react-router-dom';

const Login= ({props})=>{

  return (
        <div className="login-base" style={{marginTop: 150}}>
            <div className="login-header">Login</div>
            <div className="login-content">
                <div className="login-image">
                    <img src={loginimage} />
                </div>
                <div className="login-form">
                    <div className="login-form-group">
                        <label htmlFor="username">Email Address</label>
                        <input type="text" name="address" placeholder="Email"/>
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="login-footer">
                <button type="button" className="login-btn">
                        Login
                </button>
            </div>
        </div>
  );
}

export default Login;
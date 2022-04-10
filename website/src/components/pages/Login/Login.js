import React from "react"
import { Link } from "react-router-dom";
import loginimage from "../images/login.svg"
import "./Login.css";


const Login= (props)=>{

    // const {
    //     email,
    //     setEmail,
    //     password,
    //     setPassword,
    //     handleLogin,
    //     emailError,
    //     passwordError,
    // } = props;

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
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Email" 
                            // autoFocus 
                            // required 
                            // value={email} 
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <p className="errorMsg">{emailError}</p> */}

                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            // required
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                </div>
            </div>

            <Link to = '/Surveillance' className="login-btn" >
                    <h4>Login</h4>          
            </Link>
        </div>
  );
}

export default Login;
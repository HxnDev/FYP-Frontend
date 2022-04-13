import React, { useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import loginimage from "./images/login.png"
import "./Login.css";
import fire from '../../../fire'

const Login= (props)=>{
    let navigate = useNavigate();
    
    const routeChange = () =>{ 
        let path = '/Surveillance'; 
        navigate(path);
      }

      const [user, setUser] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [emailError, setEmailError] = useState('');
      const [passwordError, setPasswordError] = useState('');
  
  const clearInputs = () => {
      setEmail('');
      setPassword('');
  };
  
  const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
  };
  
  const handleLogin = () => {
      clearErrors();
      
      fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then (result => {
            routeChange();
          })
          .catch(err => {
              switch (err.code) {
                  case "auth/invalid-email":
                  case "auth/user-disabled":
                  case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                  case "auth/wrong-password":
                      setPasswordError(err.message);
                      break;
              }
          }
          );
  };
  
  const handleLogout = () => {
      fire.auth().signOut();
  };
  
  const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
          if (user) {
              clearInputs();
              setUser(user);
          } else {
              setUser("");
          }
      });
  };
  
  useEffect(() => {
      authListener();
  }, [])


  return (
        <div className="login-base" style={{marginTop: 120}}>
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
                            autoFocus 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{emailError}</p>

                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                        <p className="errorMsg">{passwordError}</p>
                    </div>
                </div>
            </div>

            <button className="login-btn" onClick={handleLogin}>
                    <h4>Login</h4>                   
            </button>
        </div>
  );
}

export default Login;
import React, {useState}from 'react';
import "./signup.scss";
import {Link} from "react-router-dom";
import images from "../../../resources/me.jpg";
import * as AiIcons from "react-icons/ai";


function Login() {

  const [showPassword, setShowPassword] = useState("");

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((value) => !value);
  };
  return (
    <div className="form-signup">
      <img className="image" src={images} alt=""></img>
     
    <div className="signup">
    <h1>Create Account</h1>
    {/* <label>Enter Your Username or Email</label> */}
        <input type="text" placeholder="Name" >
         
        </input>
        <input type="text" placeholder="Email Address" >
         
        </input>
        <input type="text" placeholder="Location" >
         
        </input>
        {/* <label>Enter Your Password</label> */}
        <input type={showPassword ? "text" : "password"} placeholder="Password" ></input>
        {showPassword ? (
                  <div className="icons-1">
                    <AiIcons.AiOutlineEye
                      id="eye"
                      onClick={handleShowPassword}
                    />
                  </div>
                ) : (
                  <div className="icons-1">
                    <AiIcons.AiOutlineEyeInvisible
                      id="eye"
                      onClick={handleShowPassword}
                    />
                  </div>
                )}
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" ></input>
        {showPassword ? (
                  <div className="icons-2">
                    <AiIcons.AiOutlineEye
                      id="eyeTwo"
                      onClick={handleShowPassword}
                    />
                  </div>
                ) : (
                  <div className="icons-2">
                    <AiIcons.AiOutlineEyeInvisible
                      id="eyeTwo"
                      onClick={handleShowPassword}
                    />
                  </div>
                )}
        
        <div className='checkin'>
          
        {/* <div className='remember-me'>
            
        
              
        </div> */}
        
        <div className="forgot-me">
        <label>Already Have an account</label>
        <button type="submit" ><Link to="/login">sign in</Link></button>
        
          </div>
          </div>
        <div className='btn-signup'>
        <button type="subtmit" className="btn-signup">Submit</button>
        </div> 
    </div>

 

    </div>
  )
}

export default Login
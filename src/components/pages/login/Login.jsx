import React, {useState}from 'react';
import "./Login.scss";
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
    <div className="form">
      <img className="image" src={images} alt=""></img>
     
    <div className="log">
    <h1>Log In</h1>
    {/* <label>Enter Your Username or Email</label> */}
        <input type="text" placeholder="Enter Your Username or Email" >
         
        </input>
        {/* <label>Enter Your Password</label> */}
        <input type={showPassword ? "text" : "password"} placeholder="Enter Your Password" ></input>
        {showPassword ? (
                  <div className="icon">
                    <AiIcons.AiOutlineEye
                      id="eyeOne"
                      onClick={handleShowPassword}
                    />
                  </div>
                ) : (
                  <div className="icon">
                    <AiIcons.AiOutlineEyeInvisible
                      id="eyeTwo"
                      onClick={handleShowPassword}
                    />
                  </div>
                )}
        
        <div className='checkout'>
          
        <div className='remember'>
            
        <input type="checkbox"></input>
            <label>Remember me</label>  
        </div>
        
        <div className="forgot">
        <Link to="/forgot"><p>Forgot Password </p></Link>
          </div>
          </div>
        <div className='btn-login'>
        <Link to="/dashboard"><button type="subtmit" className="btn-login">LogIn</button></Link>
        </div> 
    </div>

 

    </div>
  )
}

export default Login
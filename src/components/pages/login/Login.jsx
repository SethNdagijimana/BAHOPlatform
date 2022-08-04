import React from 'react';
import "./Login.scss";
import {Link} from "react-router-dom";


function Login() {

  // const [showPassword, setShowPassword] = useState("");

  // const handleShowPassword = (e) => {
  //   e.preventDefault();
  //   setShowPassword((value) => !value);
  // };
  return (
    <div className="form">
         
    <div className="log">
    <h1>Log In</h1>
    <label>Enter Your Username or Email</label>
        <input type="text" placeholder="Enter Your Username or Email" >
         
        </input>
        <label>Enter Your Password</label>
        <input type="password" placeholder="Enter Your Password" ></input>
    
        
        
       
        <div className='remember'>
            <input type="checkbox"></input>
            <p>Remember me</p>
            <p><Link to="/reset">Forgot Password </Link></p>
           
        </div>
        <div className="btn">
        <button type="subtmit" className="btn">LogIn</button>
        </div> 
    </div>

 

    </div>
  )
}

export default Login
import React from 'react';
import "./Login.scss";
import background from "../../../assets/bg.jpg";

function Login(){

return(

    <div>
        
        

        <img src={background} alt="background"></img>
        
       
                <div className="form_container">
                    <h3>LOG IN</h3>
                    <div className="credentials">
                    <input type="email or phone number "name="email or phone number" placeholder="Email or phone number"></input>
                    <input type="password "name="password" placeholder="password"></input>
                    </div>
                    
               

                <div className="word">
                    <input type="checkbox" ></input>

                    <p>Remember me</p>

                        <p>forgot password?</p>

                          <button className='log'>Log in</button>
                        
                           <p className="link">Don't have an account ? SIGNUP</p> 

                </div>
                
                </div>
                          
    </div>
)
}


export default Login
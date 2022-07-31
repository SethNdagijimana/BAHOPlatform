import React from 'react';
import "./Login .scss";

function Login(){

return(

    <div className='container'>
        <div className='navbar_container'>

                
            
                <div className="form">
                    <h2>LOG IN</h2>
                    <input type="email or phone number "name="email or phone number" placeholder="Email or phone number"></input>
                    <input type="password "name="password" placeholder="password"></input>
               

                <div className="word">
                    <input type="checkbox" ></input>

                    <p>Remember me</p>

                        <p>forgot password?</p>

                          <button className='log'>Log in</button>
                        
                           <p className="link">Don't have an account ? SIGNUP</p> 

                </div>
                </div>
                
                </div>
                          
    </div>
)
}


export default Login
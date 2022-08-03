import React from 'react'
import './Verification.css';
import {IoPersonCircleOutline} from "react-icons/io5";

function Verification(){

return(

    <div className='container'>
        <div className='navbar_container'>

                    <h2>BAHO</h2>
                <div className='menu'>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">contact</a></li>
                        <button className='log'>Log in</button>
                        <button className='log'>sign up</button>
                        {/* <li><a href="#">LOGIN</a></li> */}

                        {/* <li><a href="#"> SIGNUP </a></li> */}
                    </ul>
                    </div>
                <div className="content">
                    <h1>BAHO</h1>
                    <p className="par">lorem ipsum jon pseudofahet koforade medan set itesade.Ger poliga.Dirat desk prer torat.kaheskapet prening.anfodade.</p>       
                </div>
                </div>
                
            
             <div className="form">
                <div className='ico'><IoPersonCircleOutline /></div>
                {/* <IoPersonCircleOutline />              */}
                <h2>Verification code</h2>
                        <button className='lo'></button>
                        <button className='lo'></button>
                        <button className='lo'></button>
                        <button className='lo'></button>
                        <button className='se'>send</button>
                {/* <div className="col1"> 
                        <input type="text" id="text1" maxlength="1"></input>
                    </div>
                    <div className="col2">
                    <input type="text" id="text2" maxlength="1"></input>
                        </div>
                        <div className="col3">
                    <input type="text" id="text3" maxlength="1"></input>
                        </div>
                        <div className="col4">
                    <input type="text" id="text4" maxlength="1"></input>
                        </div> */}
                

            
             </div>

             <h3 className='con'>Copyrigth@ 2022,All right reserved</h3>


                    
                    
                

                          {/* <button className='log'>Log in</button> */}
                        
                           

                
                </div>
                
                          
)
}


export default Verification
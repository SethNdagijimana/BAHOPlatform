import React from 'react';
import { useEffect, useRef } from 'react';
import "./Home.scss";
// import background from "../../assets/background.png";
import {init} from 'ityped';
import Testimonials from "./Testimonials";
import { AiOutlineArrowRight} from "react-icons/ai";



function Home() {
  const textRef = useRef();

useEffect(()=>{
    init(textRef.current, {
        showCursor: true,
        backDelay: 1200,
        backSpeed: 80,
        strings: [" Because Life is a Beautiful Thing And", "There is so much to smile about"]
    })

},[])
  return (
    <div className='home_container'>
        
        <div className="wrapper">
          
            <h1>BAHO</h1>
            
                  
                  <h3>Keep Smiling, <span ref={textRef}></span></h3>
                </div> 
              
             <button className="readmore"> Read more <AiOutlineArrowRight /></button>

        
                  
                 
                
               <Testimonials />
        </div>
       
  )
}

export default Home
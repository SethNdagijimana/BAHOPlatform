import React from 'react';
import { useEffect, useRef } from 'react';
import "./Impact.scss";
import {init} from 'ityped';
import About from "./About";

function Impact() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1200,
            backSpeed: 80,
            strings: [" Love the life you live", "Live the Life you love"]
        })
    
    },[])
  return (
    <div className="home_container">
       
<div className="wrapper">
            {/* <h2>hey</h2> */}
            {/* <h1>BAHO</h1> */}
                  {/* <h1>BAHO</h1> */}
                  
                  <h3>Bob Marley, <span ref={textRef}></span></h3>
                </div> 

                
                <About />

    </div>
  )
}

export default Impact
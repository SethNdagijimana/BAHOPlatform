import React from 'react';
import { useEffect, useRef } from 'react';
import "./Home.scss";
import {init} from 'ityped';




function Home() {
  const textRef = useRef();

useEffect(()=>{
    init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Youth", "People", "Rwanda"]
    })

},[])
  return (
    <div className='home_container'>
        
        <div className="wrapper">
                  
                  <h1>BAHO</h1>
                  <h2>hey</h2>
                  
                  <h3>We Care For <span ref={textRef}></span></h3>
                </div> 
        </div>
  )
}

export default Home
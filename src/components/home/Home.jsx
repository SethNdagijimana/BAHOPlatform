import React from 'react';
import { useEffect, useRef } from 'react';
import "./Home.scss";
import {init} from 'ityped';
import Footer from './Footer';



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
                  
                 
                  {/* <h2>hey</h2> */}
                  <h1>BAHO</h1>
                  {/* <h1>BAHO</h1> */}
                  
                  <h3>We Care For <span ref={textRef}></span></h3>
                </div> 
                <Footer />
        </div>
       
  )
}

export default Home
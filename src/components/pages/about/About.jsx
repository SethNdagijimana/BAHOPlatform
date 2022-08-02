import React from 'react'
import "./About.scss"
import Impact from "./Impact";

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "BAHO",
          title: "BE YOUR OWN THERAPIST",
          desc:
    "One of the core aims of The Mighty is to give our members a greater sense of control over their health and one way we've been delighted to offer that is through participation in research projects. We have teamed up with world-class research institutions to enhance and expand understanding of topics ranging from suicidality to fibromyalgia."        },
        {
          id: 2,
          name: "Partner",
          title: "Became our partner",
          desc:
          "We work with hundreds of health care industry organizations, nonprofits, and advocacy groups with the goal of improving patients lives. If you had like to learn more about opportunities to partner with us for marketing programs, awareness campaigns, research, trial recruitment, and community support let's talk!", featured: true,
        },
        {
          id: 3,
          name: "CLUBS",
          title: "JOIN OR CREATE",
          desc:
" If you are a Baho member and have an account-related support question, please visit our Page  to find answers to frequently asked questions about the Baho platform. For any other general questions, you can email community@baho.com and someone from our team will be glad to assist you."        },
      ];
    return (
        <div className='testimonials' id='testimonials'>

            <h1>About Us</h1>
            <Impact />
            <div className="container">
                {data.map((d) =>(

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                    <h2>{d.name}</h2>
                    </div>
                    
                    <div className="center">
                        {d.desc}
                         
                    </div>
                    <div className="bottom">
                         {/* <h3>{d.name}</h3> */}
                         <h4>{d.title}</h4>
                         
                    </div>
                </div>
                ))}
            </div>
            <div className="footer">
            <footer>
           
              Created by SolvIt Africa Team 7.
             Copyright © 2022 . All rights reserved. 
             
            </footer>
            </div>
        </div>
    )
}

import React from 'react'
import "./Testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Marc",
          title: "Stress",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
    "This is the first time I have felt comfortable enough to post anything online about my mental health and it feels refreshing and enlightening."        },
        {
          id: 2,
          name: "Albert",
          title: "Depression",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
"These are the stories that the world needs. We’re all struggling, and the more that we recognize ourselves in the stories of others, the more compassion we have for others & for ourselves." ,
 featured: true,
        },
        {
          id: 3,
          name: "vailante",
          title: "Over Thinking",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
"t’s the most positive social media app I have and it makes a huge difference in my life."        },
      ];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) =>(

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user"src={d.img} alt="" />
                        <img className="right"src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                         
                    </div>
                    <div className="bottom">
                         <h3>{d.name}</h3>
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

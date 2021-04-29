import React,{useState} from 'react';
import {motion} from 'framer-motion';

export default function Home() {
    const [change, setChange] = useState(false);
    return (
        <div >
            <div className="home"></div>
            <div className="landing-info">
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div style={{marginRight:'18rem'}}>
           <h1 className="landing-title" data-aos="fade-down">Trade with <br/> Rocket Trading!</h1>
           <br/>
            <h6 className="landing-paragraph" data-aos="fade-right" data-aos-duration="1000">We're here to help. Now and always.</h6>
            <div className="button-div">
            <a style={{textDecoration:'none'}} href="https://discord.gg/hZ2M9ZnQAB"><button className="join-button" >Join Now for Free!</button></a>
            <a style={{textDecoration:'none'}} className="elite-program-padding" href="https://launchpass.com/rocket-trading/elite-options"><button className="join-button" >Join our Elite Program</button></a> 
            </div>
            </div> 
            </div>
            
           </div>
           
           
        </div>
    )
}

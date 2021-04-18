import React,{useState} from 'react';
import {motion} from 'framer-motion';

export default function Home() {
    const [change, setChange] = useState(false);
    return (
        <div id="home" >
            <div className="home"></div>
            <div className="landing-info">
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div style={{marginRight:'10rem'}}>
           <h1 className="landing-title">Welcome to Rocket Trading!</h1>
           <br/>
            <h3 style={{minWidth:'450px',maxWidth:'875px', color:'white'}}>This discord is mean for ALL LEVELS of traders.  If you are looking for a place to expand your knowledge or share your experience, you have found the right place! We are here for you. Now and always.</h3>
            <div style={{position:'absolute', left:'-1%'}}>
            <a style={{textDecoration:'none'}} href="https://discord.gg/hZ2M9ZnQAB"><button className="join-button" >Join Now for Free!</button></a>
            <a style={{textDecoration:'none'}} href="https://launchpass.com/rocket-trading/elite-options"><button className="join-button" >Join our Elite Program! </button></a> 
            </div>
            </div> 
            <motion.div animate={{ y: -100 }}
  transition={{ ease: "easeOut", duration: 3, yoyo:Infinity }}>
            <img className="rocket-image" src="/assets/rocket.png" alt="Rocket"/>
            </motion.div>
            </div>
            
           </div>
           
           
        </div>
    )
}

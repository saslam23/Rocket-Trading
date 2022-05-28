import React,{useState} from 'react';
import {motion} from 'framer-motion';
import * as Scroll from 'react-scroll';
import {Link, scrollSpy, scroller} from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
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
            <a rel="noreferrer"  href="https://discord.gg/k4zuDqpfZk" target="_blank"><button className="join-button" >Join Now for Free!</button></a>
            <Link to="services" offset={-110} className="elite-program-padding" hashSpy={true} spy={true}  activeClass="navi-link" smooth={true}><button className="join-button" >Join our Hustler Program</button></Link>
            <Link to="services" offset={-110} className="elite-program-padding" hashSpy={true} spy={true}  activeClass="navi-link" smooth={true}><button className="join-button" >Join our Elite Program</button></Link>
            </div>
            </div> 
            </div>
            
           </div>
           
           
        </div>
    )
}

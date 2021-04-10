import React,{useState} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';


export default function OurTeam() {
    const [change, setChange] = useState(false);
    return (
        <div id="our-team">
            <h1 style={{textAlign:'center', paddingTop:'2rem'}}>About Our Team</h1>
            <div
            onMouseEnter ={() =>{setChange(true)}} 
            onMouseLeave = {()=>{setChange(false)}}
            style={{height:'500px', width:'500px', backgroundColor:'#f0f0f0'}}>
                <CSSTransition in={change} timeout={500} classNames={"fade"} >
                {change ? <h1>You have hovered!</h1> : <h1>This is home!</h1> }   
                </CSSTransition>
            </div>    
        </div>
    )
}
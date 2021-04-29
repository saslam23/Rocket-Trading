import React, {useState} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Col from 'react-bootstrap/Col';

export default function TeamMemberCard(props) {
    const [change, setChange] = useState(false);
    return (
        <div style={{flex:'50%'}}>
                <div data-aos-duration={props.duration} data-aos="zoom-in" 
                onMouseEnter ={() =>{setChange(true)}} 
                onMouseLeave = {()=>{setChange(false)}}
                className="team-card">
                   <CSSTransition in={change} timeout={500} classNames={"fade"} >
                {change ?
                <div>
                    <p className="member-excerpt">{props.excerpt}</p> 
                </div>
                 : 
                <div style={{display:'flex', padding:'1.5rem 0 0 1rem'}}>
                    <img className="member-image" src={props.image} alt={props.name}/>
                    <div style={{padding:'2rem 0 0 1rem'}}>
                    <h5>{props.name}</h5>
                     <h6>{props.position}</h6>
                    </div>
                    
                </div>}   
                </CSSTransition>
            </div>
        </div>
    )
}

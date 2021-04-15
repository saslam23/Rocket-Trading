import React, {useState} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Col from 'react-bootstrap/Col';

export default function TeamMemberCard(props) {
    const [change, setChange] = useState(false);
    return (
        <div>
                <div
                onMouseEnter ={() =>{setChange(true)}} 
                onMouseLeave = {()=>{setChange(false)}}
                className="team-card" style={{backgroundColor:'#699aa4'}}>
                   <CSSTransition in={change} timeout={500} classNames={"fade"} >
                {change ?
                <div>
                    <h4 className="hover-name">{props.name}</h4>
                    <p className="member-excerpt">{props.excerpt}</p> 
                </div>
                 : 
                <div>
                    <img className="member-image" src={props.image} alt={props.name}/>
                </div>}   
                </CSSTransition>
            </div>
            <div style={{marginLeft:'7rem', marginBottom:'2rem'}}>
            <h5>{props.name}</h5>
            <h6>{props.position}</h6>
            </div> 
        </div>
    )
}

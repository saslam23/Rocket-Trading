import React from 'react'
import Col from 'react-bootstrap/Col';

export default function FeaturesCard(props) {
    return (
        <>
        <Col className="feature-card"  data-aos-duration={props.duration} data-aos="zoom-in" >
            <div className="feature-info">
            <div style={{height:'35px', width:'35px'}}> {props.image}</div>
            <h4 style={{paddingBottom:'10px'}}>{props.heading}</h4>
            <p>{props.excerpt}</p>
            </div>
              
        </Col>  
        </>
    )
}

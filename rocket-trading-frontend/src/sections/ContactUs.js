import React from 'react';
import Container from 'react-bootstrap/Container';
import {MdEmail} from 'react-icons/md';

export default function ContactUs() {
    return (
        <div  id="contact">
            <h1 className="section-title">Contact Us</h1>
        <div style={{display:'flex', justifyContent:'center', paddingTop:'2rem'}}>
            <div data-aos="fade-up" className="contact-card">
                <h5><MdEmail color="#699aa4" className="email-logo" size="30"/> Email:</h5>
                <h6 style={{paddingLeft:'2.2rem', color:'gray'}}>profit.rocket@gmail.com</h6>
            </div>
            </div>
        </div>
    )
}

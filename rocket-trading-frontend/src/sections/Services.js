import React from 'react'
import ServicesCard from '../components/ServicesCard';
import Container from 'react-bootstrap/Container';

export default function Services() {
    return (
        <div id="services">
        <div className="services">
            <h1 className="section-title">Services</h1>
            <div>
            <ServicesCard/>
            </div>
        </div>
        </div>
    )
}

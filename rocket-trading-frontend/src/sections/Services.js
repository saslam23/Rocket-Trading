import React from 'react'
import ServicesCard from '../components/ServicesCard';
import Container from 'react-bootstrap/Container';


export default function Services() {
    return (
        <div>
        <div className="services">
            <h1 className="section-title">Services</h1>
            <Container data-aos="zoom-in" data-aos-duration="1000" >
            <ServicesCard />
            </Container>
        </div>
        </div>
    )
}

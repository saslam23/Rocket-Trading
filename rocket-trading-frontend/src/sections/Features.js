import React from 'react'
import FeaturesCard from '../components/FeaturesCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {features} from '../data';
import { BsPeopleCircle } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import {GiCheckMark} from 'react-icons/gi';


const feat = (item, index) =>{
    const icons=[
        <BsPeopleCircle color={'#699aa4'} size="30"/>,
        <HiDocumentText color="#699aa4" size="30" />,
        <RiMoneyDollarCircleLine color="#699aa4" size={30}/>,
        <GiCheckMark color="#699aa4" size={30}/>
    ]

    const Icon = icons[index]
    return(
        <FeaturesCard
        heading={item.heading}
        excerpt={item.excerpt}
        image={Icon}
        duration={item.duration}
        />
    )
 
}

 export default function Features() {
    return (
        <div id="features">
            <div>
                <h1 className="section-title">Features </h1>
                <Container className="feature-container">
                    <Row>
                {features.map(feat)}
                    </Row>
                </Container>
                
            </div>
        </div>
    )
}
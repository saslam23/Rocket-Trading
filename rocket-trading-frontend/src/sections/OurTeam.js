import React,{useState} from 'react'
import TeamMemberCard from '../components/TeamMemberCard';
import {team} from '../data';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

const ourTeam = (member) =>{
    return(
        <TeamMemberCard
        id={member.id}
        key={member.key}
        name={member.name}
        position={member.position}
        excerpt={member.excerpt}
        image={member.image}
        duration={member.duration}
        />
    )
}



export default function OurTeam() {
    return (
        <div id="ourteam">
            <div className="our-team">
            <h1 className="section-title">Our Team</h1>
            <br/>
            <Container>
            <Row>
            {team.map(ourTeam)}
            </Row>
            </Container>
            </div>
        </div>
    )
}
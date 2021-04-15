import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import TeamMemberCard from '../components/TeamMemberCard';
import {team} from '../data';

const ourTeam = (member) =>{
    return(
        <TeamMemberCard
        id={member.id}
        key={member.key}
        name={member.name}
        position={member.position}
        excerpt={member.excerpt}
        image={member.image}
        />
    )
}



export default function OurTeam() {
    return (
        <div id="our-team">
            <h1 className="section-title">About Our Team</h1>
            <div className="team-cards-container">
            {team.map(ourTeam)}
            </div>
        </div>
    )
}
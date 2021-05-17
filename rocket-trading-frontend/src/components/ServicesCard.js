import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
import {services} from '../data';

export default function ServicesCard(props) {
    return (
        <div className="service-card-control">
            <div className="service-card">
            <h1 className="service-card-number">$30</h1>
            <h3 className="service-card-number-lined">$60</h3>
            <h3 className="service-card-title">per month <br/></h3>
            <ul className="service-list-style">
                {services.map((item)=>{
                    return(
                        <div key={item.id}>
                        <li data-aos="fade-up" data-aos-duration="500"><GiCheckMark color="#699aa4" size={20}/> {item.service}</li>
                        </div>
                    )
                })}
                 <a style={{textDecoration:'none'}} href="https://launchpass.com/rocket-trading/elite-options"><button className="join-button">Get started</button></a>
            </ul>
            
            </div>
        </div>
    )
}

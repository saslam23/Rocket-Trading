import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
import {services} from '../data';

/* 
const ServiceList = () => {
    return (
      <div>
   <ul className="service-list-style">
               
               {services.servicesList.map((item) =>{
                   return(
                     <div key={item.id}>
                     <li data-aos="fade-up" data-aos-duration="500"><GiCheckMark color="#699aa4" size={20}/> {item.id}</li>
                     </div>
                
                   )
               })}
  
  
         </ul>
      </div>
    )
  }
   */




export default function ServicesCard(props) {
    return (
        <div style={{justifyContent:'space-evenly', flexWrap:'wrap',}} className="service-card-control">
               {services.map((item) =>{
                     return(
            <div className="service-card">
            <h1 className="service-card-number" style={{fontSize:'2.5rem'}}>{item.programType}</h1>
            <h2 className="service-card-number">{item.cardPrice}</h2>
            
             <h3 className="service-card-number-lined">{item.cardLined}</h3>
            <h3 className="service-card-title">{item.cardTitle}<br/></h3>
            <ul className="service-list-style">
             
                  {item.servicesList.map((item) =>{
                      return(
                        <div key={item.id}>
                        <li data-aos="fade-up" data-aos-duration="500"><GiCheckMark color="#699aa4" size={20}/> {item.service}</li>
                        </div>
                   
                      )
                  })}
                  <div style={{position:'absolute', bottom:'3%'}}>
                 <a style={{textDecoration:'none'}} href={item.link}><button className="join-button">{item.buttonName}</button></a>
                 </div>
            </ul>
            
            </div>
             )
                    })}
        </div>
    )
}
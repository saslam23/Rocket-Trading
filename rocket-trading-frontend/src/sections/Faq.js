import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';
import {faq} from '../data';


export default function Faq() {
const [expanded, setExpanded] = useState([]);
const [toggle, setToggle] = useState(false);


const expandFaq = (info, index) =>{
setExpanded([...info.id]);
setToggle(!toggle);
if(expanded.includes(info.id) === false){
    setToggle(true);
    setExpanded([...info.id])
}
}
    

    return (
        <div id="faq">
            <h1 className="section-title">FAQ</h1>
            <br/>
            <Container md={12}>
                {faq.map((info, index) =>
                <div key={info.id}>
                     <div data-aos="fade-up" data-aos-duration={info.duration} className="faq-box">
                     <div onClick={()=>expandFaq(info, index)} className={`expander ${toggle && expanded.includes(...info.id)  ? "open" :null}`}>
                     <div className="expand-icon"></div>
                     <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                    <p className={`question ${toggle && expanded.includes(...info.id) ? 'change':null}`}>{info.question}</p>
                   <CSSTransition in={toggle} timeout={500} classNames={"fade"}>
                    {toggle && expanded.includes(info.id) ?
                    <div>
                        <p className="answer">{info.answer}</p>
                    </div>
                    :<div></div>
                    } 
                    </CSSTransition>
                    </div>
                    </div>
                    </div>
                </div>
                    )}  
            </Container>
        </div>
    )
}

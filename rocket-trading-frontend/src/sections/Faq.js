import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
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
            <Container md={12}>
                {faq.map((info, index) =>
                <div key={info.id}>
                     <hr/>
                     <div onClick={()=>expandFaq(info, index)} className={`expander ${toggle && expanded.includes(...info.id)  ? "open" :null}`}>
                     <div className="expand-icon"></div>
                     <div style={{display:'flex', flexDirection:'column'}}>
                    <p style={{marginLeft:'3rem', fontWeight:'bold'}}>{info.question}</p>
                    {toggle && expanded.includes(info.id) ?
                    <p style={{paddingLeft:'3rem'}}>{info.answer}</p>: ''
                    }
                    </div>
                    </div>
                <hr/>
                </div>
                    )}    
            </Container>
        </div>
    )
}

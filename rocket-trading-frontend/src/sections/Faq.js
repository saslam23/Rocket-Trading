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
            <br/>
            <Container md={12}>
                {faq.map((info, index) =>
                <div key={info.id}>
                     <hr/>
                     <div style={{display:'flex'}}>
                     <div onClick={()=>expandFaq(info, index)} className={`expander ${toggle && expanded.includes(...info.id)  ? "open" :null}`}>
                     <div className="expand-icon"></div>
                     <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                    <p className="question">{info.question}</p>
                    {toggle && expanded.includes(info.id) ?
                    <p className="answer">{info.answer}</p>: ''
                    }
                    </div>
                    </div>
                    </div>
                <hr/>
                </div>
                    )}    
            </Container>
        </div>
    )
}

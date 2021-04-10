import React,{useState} from 'react';
import Col from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';


export default function Home() {
    const [change, setChange] = useState(false);
    return (
        <Container id="home">
            <Col>
            <h1>Home Banner!</h1>    
            </Col>
           <Col>
           <h1>Reach Financial Freedom With Rocket Trading!</h1>
           <br/>
            <h3>Let us help you be successful with your trades and Join us and our experienced group of traders to help you win trades!</h3>
            <button className="join-button">Join Now!</button>
           </Col>

        </Container>
    )
}

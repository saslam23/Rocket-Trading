import React,{useState} from 'react';
import Col from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';


export default function Home() {
    const [change, setChange] = useState(false);
    return (
        <div id="home">
        <Container className="home">
            <Col>
            <h1>Home Banner!</h1>    
            </Col>
           <Col>
           <h1>Welcome to Rocket Trading!</h1>
           <br/>
            <h3 style={{minWidth:'500px'}}>This discord is mean for ALL LEVELS of traders.  If you are looking for a place to expand your knowledge or share your experience, you have found the right place!. We are here for you. Now and always.</h3>
            <a style={{textDecoration:'none'}} href="https://discord.gg/hZ2M9ZnQAB"><button className="join-button" >Join Now for Free!</button></a>
            <a style={{textDecoration:'none'}} href="https://launchpass.com/rocket-trading/elite-options"><button className="join-button" >Join our Elite Program! </button></a>
           </Col>
        </Container>
        </div>
    )
}

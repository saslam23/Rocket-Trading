import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Home from './sections/Home';
import OurTeam from './sections/OurTeam';
import Faq from './sections/Faq';
import Services from './sections/Services';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
function App() {

  return (
    <div className="App">
      
      <Navigation/>
      <Home/>
      <Services/>
      <OurTeam/>
      <Faq/>
      <Footer/>

    </div>
  );
}

export default App;

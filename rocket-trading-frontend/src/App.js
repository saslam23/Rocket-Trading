import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Home from './sections/Home';
import OurTeam from './sections/OurTeam';
function App() {

  return (
    <div className="App">
      
      <Navigation/>
      <Home/>
      <OurTeam/>
    </div>
  );
}

export default App;

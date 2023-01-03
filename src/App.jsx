import './App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Screens/Home';
import Imc from './components/Screens/Imc';
import Age from './components/Screens/Age';
import Clock from './components/Screens/Clock';
import About from './components/Screens/About';
import Contact from './components/Screens/Contact';
import Footer from './components/Footer';
import React, { useState } from 'react';


function App() {
  const tarjeta={
    bajoPeso:[18.5,"Bajo Peso"],
    adecuado:[18.5, 24.9,"Adecuado"],
    sobrepeso:[25.0,29.9,"Sobrepeso"],
    obesidadG1:[30.0,34.9,"Obesidad grado 1"],
    obesidadG2:[35.0,39.9,"Obesidad grado 2"],
    obesidadG3:[40.0,"Obesidad grado 3"],
    minimokg:40,
    maximokg:180,
    minimocm:120,
    maximocm:230,
  }
  return (
    <div className="App">
            <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Imc" element={<Imc datos={tarjeta} />} />
            <Route path="/Age" element={<Age />} />
            <Route path="/Clock" element={<Clock />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
    </div >
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Screens/Home';
import Imc from './components/Screens/Imc';
import Age from './components/Screens/Age';
import Clock from './components/Screens/Clock';
import About from './components/Screens/About';
import Contact from './components/Screens/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Imc" element={<Imc/>}/>
          <Route path="/Age" element={<Age/>}/>
          <Route path="/Clock" element={<Clock/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);
  return (
    <div className="nav-space" tabIndex="">
      <NavLink to="/" className= {selected == '/' ? 'selected link-izquierdo' : 'link-izquierdo'}>Home</NavLink>
      <NavLink to="/Imc" className={selected === '/Imc' ? 'selected link-izquierdo' : 'link-izquierdo'}>IMC Calculator</NavLink>
      <NavLink to="/Age" className={ selected == '/Age' ? 'selected link-izquierdo-logo' : 'link-izquierdo-logo'}>Age Calculator</NavLink>

      <img src="./Images/kruger.png" alt="logo" />
      <p className='logotxt'>KrugerStar</p>


      <NavLink to="/Clock" className={selected == '/Clock' ? 'selected link-derecho-logo' : 'link-derecho-logo'}>My Clock</NavLink>
      <NavLink to="/About" className={selected == '/About' ? 'selected link-derecho' : 'link-derecho'}> About me</NavLink>
      <NavLink to="/Contact"  className={selected == '/Contact' ? 'selected link-derecho' : 'link-derecho'}>Contact</NavLink>
    </div>
  )
}

export default Navbar
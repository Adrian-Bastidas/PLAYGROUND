import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import NavbarToggler from './NavbarToggler';

const Navbar = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };
  return (
    <div>
    <nav className='navbar'>
      <div className="nav-space" tabIndex="">
        <NavLink to="/" className={selected == '/' ? 'selected link-izquierdo' : 'link-izquierdo'}>Home</NavLink>
        <NavLink to="/Imc" className={selected === '/Imc' ? 'selected link-izquierdo' : 'link-izquierdo'}>IMC Calculator</NavLink>
        <NavLink to="/Age" className={selected == '/Age' ? 'selected link-izquierdo-logo' : 'link-izquierdo-logo'}>Age Calculator</NavLink>
        <img src="./Images/kruger.png" alt="logo" />
        <p className='logotxt'>KrugerStar</p>
        <NavLink to="/Clock" className={selected == '/Clock' ? 'selected link-derecho-logo' : 'link-derecho-logo'}>My Clock</NavLink>
        <NavLink to="/About" className={selected == '/About' ? 'selected link-derecho' : 'link-derecho'}> About me</NavLink>
        <NavLink to="/Contact" className={selected == '/Contact' ? 'selected link-derecho' : 'link-derecho'}>Contact</NavLink>
      </div>

    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg p-6">
    <h5 class="text-white h4">Collapsed content</h5>
    <img src="./Images/kruger.png" alt="logo" />
        <p className='logotxt'>KrugerStar</p>
    <a class="nav-link active" aria-current="page" href="/">Home</a>
    <a class="nav-link active" aria-current="page" href="/IMC">IMC Calculator</a>
    <a class="nav-link active" aria-current="page" href="/Age">Age Calculator</a>
    <a class="nav-link active" aria-current="page" href="/Clock">My Clock</a>
    <a class="nav-link active" aria-current="page" href="/About">About me</a>
    <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
  </div>
</div>

<nav class="navbar-boton ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </div>
  )
}

export default Navbar
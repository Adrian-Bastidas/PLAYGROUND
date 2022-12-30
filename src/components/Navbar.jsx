import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav-space">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Imc">IMC Calculator</NavLink>
      <NavLink to="/Age">Age Calculator</NavLink>
      <NavLink to="/Clock">My Clock</NavLink>
      <NavLink to="/About">About me</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  )
}

export default Navbar
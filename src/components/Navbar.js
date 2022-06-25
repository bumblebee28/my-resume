import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link id="profile" className='item' to="/about">Profile</Link>
        <Link id="experience" className='item' to="/experience">Experience</Link>
        <Link id="abilities" className='item' to="/abilities">Abilities</Link>
        <Link id="projects" className='item' to="/projects">Projects</Link>
        <Link id="contact" className='item' to="/contact">Contact</Link>
    </div>
  )
}

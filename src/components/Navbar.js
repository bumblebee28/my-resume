import React from 'react'
import './navbar.css'
import { Link, Outlet } from "react-router-dom";
import exit from './exit.png'

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
        <Link to="/"><img src={exit} style={{height:'35px', position:'absolute', left:'10px', top:'10px'}} alt=''/></Link>
        <Link id="profile" className='item' to="/home/profile">Profile</Link>
        <Link id="experience" className='item' to="experience">Experience</Link>
        <Link id="abilities" className='item' to="/home/abilities">Abilities</Link>
        <Link id="projects" className='item' to="projects">Projects</Link>
        <Link id="contact" className='item' to="contact">Contact</Link>
    </div>
    <Outlet/>
    </>
  )
}

import React from 'react'
import './navbar.css'
import { Link, Outlet } from "react-router-dom";
import exit from './exit.png'

export default function Navbar(props) {
  let back = props.url;
  return (
    <>
    <div className='navbar'>
        <Link to={back}><img src={exit} style={{height:'35px', position:'absolute', left:'10px', top:'10px'}} alt=''/></Link>
        <Link className='item' to="/home/profile">Profile</Link>
        <Link className='item' to="/home/abilities">Abilities</Link>
        <Link className='item' to="experience">Experience</Link>
        <Link className='item' to="projects">Projects</Link>
        <Link className='item' to="contact">Contact</Link>
    </div>
    <Outlet/>
    </>
  )
}

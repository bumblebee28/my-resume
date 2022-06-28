import React from 'react'
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import About from './About';
import Abilities from './Abilitites';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop';

export default function Home() {
  return (
        <Router>
          <Navbar/>
            <Routes>
                <Route exact path="/about" element={<About name='Harshita Pal' age='20' location='New Delhi, India' current='BSc (Hons) Computer Science'/>}/>
                <Route exact path="/abilities" element={<Abilities/>}/>
                <Route exact path="/experience" element={<Experience/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
            </Routes>
            <ScrollToTop/>
        </Router>
  )
}

import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Abilities from './components/Abilitites';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
          
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/home" element={<Home />}>
                <Route path="profile" element={<About name='Harshita Pal' age='20' location='New Delhi, India' current='BSc (Hons) Computer Science'/>}/>
                <Route path="abilities" element={<Abilities/>}/>
                <Route exact path="experience" element={<Experience/>}/>
                <Route exact path="contact" element={<Contact/>}/>
                <Route exact path="projects" element={<Projects/>}/>
          </Route>
        </Routes>
        <ScrollToTop/>
     </Router>
    </>
);
}

export default App;

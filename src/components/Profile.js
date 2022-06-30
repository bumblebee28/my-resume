import React from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='fmain animated fadeIn waviy'>
    
      <div id='name'>
        <span Style="--i:1">H</span>
        <span Style="--i:2">A</span>
        <span Style="--i:3">R</span>
        <span Style="--i:4">S</span>
        <span Style="--i:5">H</span>
        <span Style="--i:6">I</span>
        <span Style="--i:7">T</span>
        <span Style="--i:8">A</span>
        {" "}
        <span Style="--i:9">P</span>
        <span Style="--i:10">A</span>
        <span Style="--i:11">L</span>
        <p id='res'>
          <span Style="--i:2">i</span>
          <span Style="--i:3">n</span>
          <span Style="--i:4">t</span>
          <span Style="--i:5">e</span>
          <span Style="--i:6">r</span>
          <span Style="--i:7">a</span>
          <span Style="--i:8">c</span>
          <span Style="--i:9">t</span>
          <span Style="--i:10">i</span>
          <span Style="--i:11">v</span>
          <span Style="--i:12">e</span>
          {" "}
          <span Style="--i:14">r</span>
          <span Style="--i:15">e</span>
          <span Style="--i:16">s</span>
          <span Style="--i:17">u</span>
          <span Style="--i:18">m</span>
          <span Style="--i:19">e</span>
        </p>
        <Link id = "peek" to='/home'>Peek Inside</Link>
      </div>
    </div>
  )
}

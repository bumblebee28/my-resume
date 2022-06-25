import React from 'react'
import './About.css'

export default function About(props) {
    let {name, age, location, current} = props
  return (
    <div>
    <div className='body1'>
        <p id="heading">Profile</p>
        <div className="self">
            <h1>i do a bit of everything</h1>
            <p>I am a Web Developer, a Coder, a Designer, a Digital Artist, an Illustrator and a lifetime student. 
              I am a dancer. I am a reader and a writer. I am an Optimist And I will be more things yet to come.</p>
        </div>
        </div>
        <div className='body2'>
        <div className="about">
          <h1>About Me</h1>
          <div id='grid'>
          <p>Name</p> <p>:</p> <p>{name}</p>
          <p>Age</p> <p>:</p> <p>{age} years</p>
          <p>Location</p> <p>:</p> <p>{location}</p>
          <p>Currently Pursuing</p> <p>:</p> <p>{current}</p>
          </div>
          
        </div>
    </div>
    </div>
  )
}

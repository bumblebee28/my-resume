import React from 'react'
import './About.css'

export default function About(props) {
    let {name, age, location, current} = props
  return (
    <div>
        <div className='body2'>
        <p id="heading1">Profile</p>
        <div className="about">
          <h1>about me</h1>
          <p>Hii, I am {name}. I am {age} years old. I currently live in {location} and pursuing {current} from Keshav Mahavidyalaya, Delhi University. One thing I think about everyday before going to sleep 
          is "what new did I learn today?". I believe that No matter your age or profession, you learn something new every day. 
          And as a 'ever-hungry' student for new intriguing techs and knowledge, I keep on learning new things. 
          I don't want to miss anything that life has to offer to me. So, I explore every other opportunity i can get a hold of! </p>
          
        </div>
    </div>
    <div className='body1'>
        <div className="self">
            <h1 style={{color:'#03506F'}}>i do a bit of everything</h1>
            <p>I am a <b>Full Stack Web Developer</b>, a Coder, a Designer, a Digital Artist, an Illustrator and a lifetime student. 
              I am a dancer. I am a reader and a writer. I am an Optimist And I will be more things yet to come.</p>
        </div>
        </div>
    </div>
  )
}

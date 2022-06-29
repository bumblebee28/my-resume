import React from 'react'
import './Experience.css'

export default function Experience() {
  return (
    <div className='ebody'>
      <p id='heading1'>Experiences</p>
      <div className="edu">
        <p style={{fontSize:'40px'}}>Educations</p>
        <div className='edubox'>          
          <p className='institute'>Keshav Mahavidyalaya <p>2020 - 2023</p></p>
          <p className='course'>BSc Honors Computer Science<p>Pursuing</p></p>
        </div>
        <div className='edubox'>          
          <p className='institute'>D.A.V. Pushpanjali <p>2018 - 2020</p></p>
          <p className='course'>High School - Physics, Chemistry, Mathematics and Computer Science<p><b>95%</b> in AISSCE class XII</p></p>
        </div>
        <div className='edubox'>          
          <p className='institute'>Saint Giri School <p>2008 - 2018</p></p>
          <p className='course'>Junior School <p><b>93.8%</b> in AISSCE class X</p></p>
        </div>
      </div>
      <div className="edu">
        <p style={{fontSize:'40px'}}>Internships</p>
        <div className='edubox'>          
          <p className='institute'>photoATM<p>Nov 2021 - Feb 2022</p></p>
          <p className='course'>Graphic Designer (Freelance)</p>
        </div>
      </div>
    </div>
  )
}

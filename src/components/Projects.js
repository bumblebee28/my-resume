import React from 'react'
import './project.css'

export default function Projects() {
  return (
      <div className='pbody'>
        <div id="heading">Projects</div>
        <div id="projects">
          <div className="project">
            <h1>CodeMate</h1>
            <a href='https://github.com/bumblebee28/CodeMate-1.git' target={'_blank'}>link to repository</a>
          </div>
          <div className="project">
            <h1>Pigeon News</h1>
            <a href='https://github.com/bumblebee28/Pigeon-News.git' target={'_blank'}>link to repository</a>
          </div>
          <div className="project">
            <h1>EzAppoint</h1>
            <a href='https://github.com/bumblebee28/ezappoint.git' target={'_blank'}>link to repository</a>
          </div>
          <div className="project">
            <h1>Canteen App</h1>
            <a href='https://github.com/bumblebee28/canteen.git' target={'_blank'}>link to repository</a>
          </div>
        </div>
      </div>
      
  )
}

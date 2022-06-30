import React from 'react'
import Navbar from './Navbar';

export default function Home(props) {
  
  return (
        <div className='hmain'>
          <Navbar url={(window.location.pathname)==='/home'?'/':'/home'}/>          
        </div>
  )
}

import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div id='contact'>
      <div className="cdiv">
        <p id='c'>Contact</p>
          
          <div id='cbody'>          
          <a href='https://www.linkedin.com/in/harshita-pal-1848751bb/' target="_blank"><div className="linked"></div></a>
          <a href='https://twitter.com/HarshitaPal18' target="_blank"><div className="twitter"></div></a>
          </div>
          <div id='cbody'>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswPCcsngVSMrSvzvWxGDCfbZSwlMxWsvmmBGDHzPCmsmHZgzqpnmcxwxjKjkSJXDsdcB' target="_blank"><div className="mail"></div></a>
          <a href='https://github.com/bumblebee28' target="_blank"><div className="git"></div></a>   
          </div>
       
        <div id='phone'><span className="call"></span><span style={{margin:'10px'}}>+91 8447317198</span></div>
      </div>      
    </div>
  )
}

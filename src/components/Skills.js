import React from 'react'
import Data from './data.ts'
import './Abilitites'

export default function Skills() {

    function printStars(level) {
        let html = (<span id='star'></span>);
        for(let i=0; i<level-1; i++){
            html = [html,(<span id='star'></span>)];
        }
        return html;
    }
  return (
    <div>
         {
            Data && Data.map( data =>{
                return(
                    <ul className='outer'>
                        <li className='skill'>
                            <span id='sname'> {data.ability} </span>
                            <span id='icon'>{printStars(data.level)}</span>
                        </li>
                    </ul>
                )
            })
         }
    </div>
  )
}

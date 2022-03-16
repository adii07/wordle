import React from 'react'
import Key from './Key';

function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className='keyboard'>
        <div className='line1'>
            {keys1.map((key,id)=>{
                return <Key key={id} value={key}/>
            })}
        </div>
        <div className='line2'>
            {keys2.map((key,id)=>{
                return <Key key={id} value={key}/>
            })}
        </div>
        <div className='line3'>
            <Key value={"Enter"} key="enterKey" bigKey/>
            {keys3.map((key,id)=>{
                return <Key value={key} key={id}/>
            })}
            <Key value={"Delete"} key="deleteKey" bigKey/>
        </div>
    </div>
  )
}

export default Keyboard
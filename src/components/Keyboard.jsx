import React, { useCallback, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const{currAttempt,onSelectLetter,onDelete,onEnter}=useContext(AppContext);

    const handleKeyboard=useCallback((e)=>{
        if(e.key==="Enter"){
            onEnter();
        }else if(e.key==='Backspace'){
            onDelete();
        }else{
            keys1.forEach((keyVal)=>{
                if(e.key.toLowerCase()===keyVal.toLowerCase()){
                    onSelectLetter(keyVal);
                }
            })
            keys2.forEach((keyVal)=>{
                if(e.key.toLowerCase()===keyVal.toLowerCase()){
                    onSelectLetter(keyVal);
                }
            })
            keys3.forEach((keyVal)=>{
                if(e.key.toLowerCase()===keyVal.toLowerCase()){
                    onSelectLetter(keyVal);
                }
            })
        }
    },[currAttempt]);

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyboard);

        return()=>{
            document.removeEventListener("keydown",handleKeyboard);
        }

    },[handleKeyboard])
  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
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
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
function Letter({letterPos,attemptVal}) {
    const {board,correctWord,currAttempt,setDisabledLetters,disabledLetters}=useContext(AppContext);
    const letter=board[attemptVal][letterPos];
    
    const correct=correctWord[letterPos]===letter;
    const almost=!correct && letter!=="" && correctWord.includes(letter);
    const letterState=currAttempt.attempt>attemptVal && (correct?"correct":(almost?"almost":"error"));

    useEffect(()=>{
      if(letter!=="" && !correct && !almost){
        setDisabledLetters((prevState)=>[...prevState,letter]);//*
      }
    },[currAttempt.attempt]);

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter
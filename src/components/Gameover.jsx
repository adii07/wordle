import React, { useContext } from 'react'
import { AppContext } from '../App'

function Gameover() {
    const{gameOver,setGameOver,correctWord,currAttempt}=useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{(gameOver.rightGuess?"You Correctly Guessed the word":"You Guessed the Incorrect word")}</h3>
        <h1>Correct Word:{correctWord}</h1>
        {gameOver.rightGuess && (<h3>You guessed the correct word in {currAttempt.attempt} attempts!</h3>)}
    </div>
  )
}

export default Gameover
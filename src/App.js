import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';//context
import { createContext } from 'react';//context

export const AppContext=createContext();//context
function App() {
  const [board,setBoard]=useState(boardDefault);
  const [currAttempt,setCurrAttempt]=useState({attempt:0,letterPos:0});
  const correctWord="RIGHT";

  const onSelectLetter=(value)=>{
    if(currAttempt.letterPos>4)return ;
            // console.log(value)
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos]=value;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letterPos: currAttempt.letterPos +1})
  }

  const onDelete=()=>{
    if(currAttempt.letterPos===0) return;
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letterPos: currAttempt.letterPos -1});

  }

  const onEnter=()=>{
    if(currAttempt.letterPos!==5) return;
    setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0});
  }

  return (
    
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* context */}
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onDelete,onEnter,correctWord}}>
        <div className='game'>
          <Board/>
          <Keyboard/>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

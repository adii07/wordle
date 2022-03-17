import { useEffect, useState } from 'react';
import './App.css';
import Gameover from './components/Gameover';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';//context
import { createContext } from 'react';//context
import { generateWord } from './Words';
export const AppContext=createContext();//context
function App() {
  const [board,setBoard]=useState(boardDefault);
  const [currAttempt,setCurrAttempt]=useState({attempt:0,letterPos:0});
  const [wordSet,setWordSet]=useState(new Set());
  const [disabledLetters,setDisabledLetters]=useState([]);
  const [correctWord,setCorrectWord]=useState("RIGHT");
  const[gameOver,setGameOver]=useState({gameOver:false,rightGuess:false});

  useEffect(()=>{
    generateWord().then((word)=>{
      setWordSet(word.wordSet);
      setCorrectWord(word.todaysWord.toUpperCase());
      console.log(word.todaysWord);
    });
  },[]);

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
    let currWord="";
    for(let i=0;i<5;i++) currWord+=board[currAttempt.attempt][i];
    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0});
    }else{
      alert("WORD NOT FOUND!");
    }
    if(correctWord===currWord){
      // alert('YOU WON!!');
      setGameOver({gameOver:true,rightGuess:true});
      return;
    }
    if(currAttempt.attempt===5){
      setGameOver({gameOver:true,rightGuess:false});
      return;
    }
  }

  return (
    
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* context */}
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onDelete,onEnter,correctWord,setDisabledLetters,disabledLetters,gameOver,setGameOver}}>
        <div className='game'>
          <Board/>
          {gameOver.gameOver?<Gameover/>:<Keyboard/>}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';//context
import { createContext } from 'react';//context

export const AppContext=createContext();//context
function App() {
  const[board,setBoard]=useState(boardDefault);

  return (
    
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* context */}
      <AppContext.Provider value={{board,setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;

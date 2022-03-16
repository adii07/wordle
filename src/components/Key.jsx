import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key({value,bigKey}) {
    const {onSelectLetter,onDelete,onEnter}=useContext(AppContext);
    
    const selectLetter=()=>{
        if(value==='Enter'){
            onEnter();
        }else if(value==='Delete'){
            onDelete();
        }else{
            onSelectLetter(value);
        }
    };
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>{value}</div>
  )
}

export default Key;
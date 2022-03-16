import React from 'react'

function Letter({letterPos,attemptVal}) {
    const letter=board[letterPos][attemptVal];
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter
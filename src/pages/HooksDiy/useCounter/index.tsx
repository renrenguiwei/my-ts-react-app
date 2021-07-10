import React from 'react'
import { useCounter } from './useCounter'

const CountingStars = () => {
  const { count, incresement, decresement, resetGame } = useCounter(10)
  return (
    <>
      <div>{count}</div>
      <button onClick={incresement}>添加+++</button>
      <button onClick={decresement}>减减--</button>
      <button onClick={resetGame}>重置+++</button>
    </>
  )
}

export default CountingStars

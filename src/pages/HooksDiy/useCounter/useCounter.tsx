import { useState, useCallback } from 'react'

export const useCounter = (step: number = 1) => {
  const [count, setCount] = useState(0)
  const incresement = useCallback(() => setCount((count) => count + step), [])
  const decresement = useCallback(() => setCount((count) => count - step), [])
  const resetGame = useCallback(() => setCount(0), [])

  return {
    count,
    incresement,
    decresement,
    resetGame
  }
}

import React, { useState, useRef, useCallback } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const timer: any = useRef(null)

  const handleStart = useCallback(() => {
    timer.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }, [])

  const handlePause = useCallback(() => {
    clearInterval(timer.current)
    timer.current = null
  }, [])

  return (
    <>
      <div>{time} / 时间</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </>
  )
}

export default App

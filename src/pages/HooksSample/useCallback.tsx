import React, { useState, useCallback } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [words, setWords] = useState('')
  // const handleIncrement = useCallback(() => setCount(count + 1), [count])
  const handleIncrement = () => setCount(count + 1)
  // const sayWords = useCallback(() => setWords((words) => words + '1'), [words])
  return (
    <>
      {/*<button onClick={handleIncrement}>+{count}</button>*/}
      {/*<button onClick={sayWords}>say:{words}</button>*/}
      <Button onClick={handleIncrement}>+{count}</Button>
    </>
  )
}

interface ButtonType {
  onClick: () => void
  children: any
}

function Button(props: ButtonType) {
  const { onClick, children } = props
  console.log('Button Render', 1)
  return <button onClick={onClick}>{children}</button>
}

export default Counter

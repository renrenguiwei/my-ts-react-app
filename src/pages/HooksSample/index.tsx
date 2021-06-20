import { useEffect, useState } from 'react'

const HooksSample = () => {
  const [count, setCount] = useState(0)
  const todos = [{ text: 'myName' }]
  useEffect(() => {
    console.log('todos change')
  }, [todos])
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <div>count: {count}</div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  )
}

export default HooksSample

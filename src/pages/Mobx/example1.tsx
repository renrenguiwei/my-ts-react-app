import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Store1 } from './store'
const Example1 = () => {
  useEffect(() => {
    setInterval(() => {
      Store1.increase()
    }, 1000)
  }, [])

  return (
    <div>
      <div>指示器：{Store1.secondPassed}</div>
      <button onClick={() => Store1.reset()}>Reset</button>
    </div>
  )
}

export default observer(Example1)

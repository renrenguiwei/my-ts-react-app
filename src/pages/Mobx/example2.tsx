/**
 * 在function中使用Mobx新Api
 */
import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Store2 } from './store'

let a: number = 1
const Example2 = () => {
  useEffect(() => {
    setInterval(() => {
      Store2.increment()
    }, 1000)
  }, [])

  return (
    <div>
      <div>指示器：{Store2.value}</div>
      <div>指示器 Double：{Store2.double}</div>
      <button onClick={() => Store2.reset()}>Reset</button>
    </div>
  )
}

export default observer(Example2)
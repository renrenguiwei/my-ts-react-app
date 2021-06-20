import React from 'react'
import { inject, observer } from 'mobx-react'

enum Operate {
  MINUS = 'MINUS',
  PLUS = 'PLUS'
}

function Index1(props: any) {
  const { Index1Store } = props

  const oprate = (type: Operate) => {
    switch (type) {
      case Operate.MINUS:
        Index1Store.setValue('count', Index1Store.count - 1)
        break
      case Operate.PLUS:
        Index1Store.setValue('count', Index1Store.count + 1)
        break
      default:
        break
    }
  }

  return (
    <div>
      <button onClick={() => oprate(Operate.MINUS)}>-</button>
      <span>{Index1Store?.count}</span>
      <button onClick={() => oprate(Operate.PLUS)}>+</button>
    </div>
  )
}

export default inject('Index1Store')(observer(Index1))

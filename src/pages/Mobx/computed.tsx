/**
 * 在function中使用Mobx新Api
 */
import React, { useEffect } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import { Store3 } from './store'

const Example2 = () => {
  useEffect(() => {
    const stop = autorun(() => {
      console.log('Total: ', Store3.total)
    })

    console.log(Store3.total)

    Store3.amount = 5
    Store3.price = 2

    stop()

    console.log(1212)
    Store3.price = 11
    Store3.amount = 11
  }, [])

  return <></>
}

export default observer(Example2)

import React  from 'react'

import { observable, autorun } from '@/pages/mobxSharing/demo2/mobx'

// styles
import '@/asset/styles.less'

function App() {
  const store = observable({a: 1, b: {c: 1}})
  autorun(() => {
    console.log(store.b.c)
  })

  store.b.c = 5042

  return (
    <div className="App" />
  )
}

export default App

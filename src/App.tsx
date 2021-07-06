import React, { useState, useEffect } from 'react'

// component
import MobxExample1 from '@/pages/Mobx/example1'
import MobxExample from '@/pages/Mobx/computed'

// styles
import '@/asset/styles.less'

function App() {
  return (
    <div className="App">
      <MobxExample />
    </div>
  )
}

export default App

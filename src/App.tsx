import React, { useState, useEffect } from 'react'

// component
import MobxExample1 from '@/pages/Mobx/example1'
import MobxExample2 from '@/pages/Mobx/example2'

// styles
import '@/asset/styles.less'
import { LodashTest } from "@/pages/LodashTest/lodashTest";

function App() {
  return (
    <div className="App">
      {/*<MobxExample2 />*/}
      <LodashTest />
    </div>
  )
}

export default App

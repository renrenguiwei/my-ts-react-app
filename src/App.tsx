import React, { useState, useEffect } from 'react'

// component
import MobxExample1 from '@/pages/Mobx/example1'
import MobxExample2 from '@/pages/Mobx/example2'

// styles
import '@/asset/styles.less'
import { ZipImg } from "@/pages/ZipImg";

function App() {
  return (
    <div className="App">
      <ZipImg />
    </div>
  )
}

export default App

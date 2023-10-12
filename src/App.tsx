import React, { useState, useEffect } from 'react'

// component
import MobxExample1 from '@/pages/Mobx/example1'
import MobxExample2 from '@/pages/Mobx/example2'

// styles
import '@/asset/styles.less'
import DatePicker from "@/pages/DatePicker";

function App() {
  return (
    <div className="App">
      <DatePicker />
    </div>
  )
}

export default App

import React  from 'react'
import { configure } from 'mobx'
import Feature01 from '@/pages/feature01'

// styles
import '@/asset/styles.less'

configure({
  enforceActions: 'observed'
})

function App() {
  return <Feature01 />
}

export default App

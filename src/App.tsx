import React from 'react'

// component
import StorgePage from '@/pages/Storage'
import ReactNotUpdate from '@/pages/ReactNotUpdate'
import CreateElement from '@/pages/CreateElement'

// styles
import '@/asset/styles.less'

// asset
import Leimu from '@/asset/imgs/leimu.jpg'

function App() {
  return (
    <div className="App">
      <StorgePage />
      <ReactNotUpdate />
      <CreateElement id={1} keys={2}>
        <span>我是子组件</span>
      </CreateElement>
      <div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>
        12
      </div>
    </div>
  )
}

export default App

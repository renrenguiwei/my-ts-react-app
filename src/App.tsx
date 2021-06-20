import React from 'react'

// component
import StorgePage from '@/pages/Storage'
import ReactNotUpdate from '@/pages/ReactNotUpdate'
import useWindowSize from '@/pages/WindowResize'
import HooksSample from '@/pages/HooksSample'

// styles
import '@/asset/styles.less'

// asset
import Leimu from '@/asset/imgs/leimu.jpg'

function App() {
  const size = useWindowSize()
  return (
    <div className="App">
      <StorgePage />
      <ReactNotUpdate />
      <div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>
        123
      </div>
      {size === 'large' ? '变大大大大' : '变小小小小'}
      <HooksSample />
    </div>
  )
}

export default App

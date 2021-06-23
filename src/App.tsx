import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

// component
// import StorgePage from '@/pages/Storage'
// import ReactNotUpdate from '@/pages/ReactNotUpdate'
// import useWindowSize from '@/pages/UseWindowSize'
// import HooksSample from '@/pages/HooksSample'
// import HooksSample2 from '@/pages/HooksSample/index2'
// import Counter from '@/pages/HooksSample/useCallback'
// import Counter2 from '@/pages/HooksSample/useCallback2'
import useCallback3 from '@/pages/HooksSample/useCallback3'
import useMemo from '@/pages/HooksSample/useMemo'
// import UseRef from '@/pages/HooksSample/useRef'
// import UseContext from '@/pages/HooksSample/useContext'
// import UseScroll from '@/pages/HooksDiy/useScroll'
import CountingStars from '@/pages/HooksDiy/useCounter'

// styles
import '@/asset/styles.less'

// asset
// import Leimu from '@/asset/imgs/leimu.jpg'

function App() {
  // const size = useWindowSize()
  return (
    <div className="App" style={{ height: '10000px' }}>
      {/*<StorgePage />*/}
      {/*<ReactNotUpdate />*/}
      {/*<div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>*/}
      {/*  123*/}
      {/*</div>*/}
      {/*{size === 'large' ? '变大大大大' : '变小小小小'}*/}
      {/*<HooksSample />*/}
      {/*<HooksSample2 />*/}
      {/*<Counter />*/}
      {/*<Counter2 />*/}
      {/*<Counter3 />*/}
      {/*<UseRef />*/}
      {/*<UseContext />*/}
      {/*<HashRouter>*/}
      {/*  <Route exact path="/" component={useCallback3} />*/}
      {/*  <Route exact path="/useMemo" component={useMemo} />*/}
      {/*</HashRouter>*/}
      <CountingStars />
    </div>
  )
}

export default App

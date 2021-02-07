import React from 'react'

// component
// import StorgePage from '@/pages/Storage'
// import ReactNotUpdate from '@/pages/ReactNotUpdate'
// import CreateElement from '@/pages/CreateElement'
// import ReactRef from '@/pages/ReactRef'
// import Context from '@/pages/Context'
// import Suspense from '@/pages/Suspense'
import Hooks from '@/pages/Hooks'

// styles
import '@/asset/styles.less'

// asset
// import Leimu from '@/asset/imgs/leimu.jpg'

function App() {
  return (
    <div className="App">
      {/*<StorgePage />*/}
      {/*<ReactNotUpdate />*/}
      {/*<CreateElement id={1} keys={2}>*/}
      {/*  <span>我是子组件</span>*/}
      {/*</CreateElement>*/}
      {/*<ReactRef />*/}

      {/*<div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>*/}
      {/*  12*/}
      {/*</div>*/}
      {/*<Context />*/}
      {/*<Suspense />*/}
      <Hooks />
    </div>
  )
}

export default App

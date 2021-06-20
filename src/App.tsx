import React from 'react'
import { Provider } from 'mobx-react'
// import stores from '@/pages/Mobx/store'
import stores from '@/pages/Mobx/store'

// component
import StorgePage from '@/pages/Storage'
import ReactNotUpdate from '@/pages/ReactNotUpdate'
import Mobx1 from '@/pages/Mobx/index1'

// styles
import '@/asset/styles.less'

// asset
import Leimu from '@/asset/imgs/leimu.jpg'

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <StorgePage />
        <ReactNotUpdate />
        <div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>
          123
        </div>
        <Mobx1 />
      </div>
    </Provider>
  )
}

export default App

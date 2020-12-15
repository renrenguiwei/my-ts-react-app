import React from 'react'

// component
import StorgePage from './pages/Storage'

// styles
import './asset/styles.less'

// asset
import Leimu from './asset/imgs/leimu.jpg'

function App() {
  return (
    <div className="App">
      <StorgePage />
      <div className="girlsIcon" style={{ backgroundImage: `url(${Leimu})` }}>
        12
      </div>
    </div>
  )
}

export default App

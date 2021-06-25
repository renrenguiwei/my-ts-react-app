import React from 'react'

// component
import UserList from '@/pages/HooksDiy/useAsync'
import CounterRedux from '@/pages/Redux/counter'

// styles
import '@/asset/styles.less'

function App() {
  return (
    <div className="App" style={{ height: '10000px' }}>
      <UserList />
      <CounterRedux />
    </div>
  )
}

export default App

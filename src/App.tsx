import React, { useState, useEffect } from 'react'

// component
import UserList from '@/pages/HooksDiy/useAsync'
import { PriceInput } from '@/pages/DeepThink/PriceInput'

// styles
import '@/asset/styles.less'

const initData = { amount: 0, currency: 'rmb' }

function App() {
  const [value, setValue] = useState(initData)

  return (
    <div className="App" style={{ height: '10000px' }}>
      <UserList />
      <PriceInput
        value={value}
        onChangeCb={(e) => {
          console.log(e)
          setValue(e)
        }}
      />
    </div>
  )
}

export default App

import './App.css'
import React from 'react'
import storage from './utils/storage'

function App() {
  const get = () => {
    const name = storage.getItem('name')
    console.log(name)
  }
  const set = () => {
    storage.setItem({
      name: 'name',
      value: 'claus wong',
      expires: '3000'
    })
  }
  const remove = () => {
    storage.removeItem('name')
  }
  const clear = () => {
    storage.clear()
  }

  return (
    <div className="App">
      <button onClick={() => get()}>读取</button>
      <button onClick={() => set()}>设置</button>
      <button onClick={() => remove()}>删除</button>
      <button onClick={() => clear()}>清空</button>
    </div>
  )
}

export default App

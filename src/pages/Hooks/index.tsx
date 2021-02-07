import React, { useState, useEffect } from 'react'

export default () => {
  const [unknown, setUnknown] = useState(1)
  const [name, setName] = useState('claus')

  useEffect(() => {
    console.log('component mount', unknown)
    return () => {
      console.log('component unmount') // 每次更新都会进行卸载
    }
  }, [unknown])

  return (
    <div>
      <div>username: {name}</div>
      <button onClick={() => setUnknown((pre) => pre + 1)}>Change</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

import React, { useState, useMemo, useEffect } from 'react'

const classMates: any[] = ['小明', '小红', '小李', '小张']

function App() {
  const [list, setList] = useState([] as any[])
  const [search, setSearch] = useState('')
  const [info, setInfo] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setList(classMates)
    }, 100)
  }, [])

  useEffect(() => {
    console.log('refresh refresh')
    return () => {
      console.log('children unmount')
    }
  }, [])

  const listData: any[] = useMemo(() => {
    if (list?.length > 0) {
      // const regExp = new RegExp(search, 'g')
      return list.filter((item) => !!item.match(search)?.[0])
    } else {
      return []
    }
  }, [search, list])

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <input value={info} onChange={(e) => setInfo(e.target.value)} />
      <ul>{listData.length > 0 && listData.map((item, key) => <li key={key}>{item}</li>)}</ul>
    </>
  )
}

export default App

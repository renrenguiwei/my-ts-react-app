import React, { useState, useCallback, useEffect } from 'react'
interface ChildProps {
  val: string
  getData: Function
}

// 用于记录 getData 调用次数
let count = 0
function App() {
  const [val, setVal] = useState('')

  const getData = useCallback(() => {
    setTimeout(() => {
      setVal('new data ' + count)
      count++
    }, 500)
  }, [])

  return <Child val={val} getData={getData} />
}

function Child(props: ChildProps) {
  const { val, getData } = props
  useEffect(() => {
    getData()
  }, [getData])
  return <div>{val}</div>
}

export default App

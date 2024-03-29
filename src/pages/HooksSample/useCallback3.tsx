import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSingleton } from '@/pages/HooksDiy/useSingleton'

interface ChildrenProps {
  val: string
  onChange: (val: any) => void
}

function App() {
  let history = useHistory()
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')

  useSingleton(() => {
    console.log('只会被执行一次哦哦哦')
  })

  const onChange1 = useCallback((e: any) => {
    setVal1(e.target.value)
  }, [])

  const onChange2 = useCallback((e: any) => {
    setVal2(e.target.value)
  }, [])

  useEffect(() => {
    console.log('parent mount')
    return () => {
      console.log('parent unMount')
    }
  }, [val1])

  return (
    <>
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
      <button onClick={() => history.push('/useMemo')}>跳转路由</button>
    </>
  )
}

const Child = React.memo(function (props: ChildrenProps) {
  const { val, onChange } = props
  // console.log('childern render')
  return <input value={val} onChange={onChange} />
})

export default App

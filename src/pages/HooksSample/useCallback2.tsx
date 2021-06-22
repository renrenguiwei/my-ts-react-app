import React, { useRef, useState, useCallback, useEffect } from 'react'
interface ChildProps {
  val: string
  getData: Function
}

// 用于记录 getData 调用次数
/**
 * 思考: getData接口请求有用到val，val成依赖，val变化导致getData重新创建，那死循环不是又开始了吗？
 * 方法：
 * 1. 将val赋值给ref
 * 2. 自定义hook，让传进去的val变化，getData不变
 */

let count = 0
function App() {
  const [val, setVal] = useState('')

  const getData = useRefCallback(() => {
    setTimeout(() => {
      setVal('new data ' + count)
      count++
    }, 500)
  }, [val])

  return <Child val={val} getData={getData} />
}

function useRefCallback(fn:any, dependencies: any) {
  const ref = useRef(fn);

  // 每次调用的时候，fn 都是一个全新的函数，函数中的变量有自己的作用域
  // 当依赖改变的时候，传入的 fn 中的依赖值也会更新，这时更新 ref 的指向为新传入的 fn
  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);
}

function Child(props: ChildProps) {
  const { val, getData } = props
  useEffect(() => {
    getData()
  }, [getData])
  return <div>{val}</div>
}

export default App

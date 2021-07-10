import { useState, useCallback } from 'react'
const useAsync = (asyncFunction: any) => {
  // 设置三个异步逻辑相关的 state
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // 定义一个 callback 用于执行异步逻辑
  const execute = useCallback(() => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    setLoading(true)
    setData([])
    setError(null)
    asyncFunction()
    // return asyncFunction()
      .then((response: any) => {
        // 请求成功时，将数据写进 state，设置 loading 为 false
        setData(response)
        setLoading(false)
      })
      .catch((error: any) => {
        // 请求失败时，设置 loading 为 false，并设置错误状态
        setError(error)
        setLoading(false)
      })
  }, [])

  return { execute, loading, data, error }
}

export default useAsync

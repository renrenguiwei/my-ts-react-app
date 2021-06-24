import React, { useEffect } from 'react'
import useAsync from './useAsync'

export default function UserList() {
  // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
  const { execute: fetchUsers, data: users, loading, error } = useAsync(async () => {
    const res = await fetch('https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list')
    const json = await res.json()
    return json.data
  })

  useEffect(() => {
    fetchUsers()
    /**
     * 此处用不用then完全取决于内部return Promise
     * 1. 不是内页越多return越高级，内层return不return完全
     *    取决于外层对内层数据、动作操作的细腻度
     */
    // fetchUsers().then()
  }, [])

  let res: any = null
  if (loading) {
    res = <div>数据加载…</div>
  } else if (error) {
    res = <div>数据请求错误</div>
  } else if (users.length > 0) {
    res = users.map((item, key) => {
      return (
        <div key={key}>
          <span style={{ color: '#fff' }}>{item?.['order_no']}</span>
        </div>
      )
    })
  } else {
    res = null
  }
  return res
}

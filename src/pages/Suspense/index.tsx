import React, { Suspense, lazy } from 'react'
// import LazyComp from './lazy'

/**
 * 异步组件加载
 * res: 会生成额外的 chunk.js 文件
 */
const LazyComp = lazy(() => import('./lazy'))

let data = ''

// suspense 这块写proimse效果不理想
// 类似于 Promise.all 所有异步加载完成后，才会显示出来
function requestData() {
  if (data) return data
  // if (promise) throw promise
  let promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      data = 'resolve'
      resolve()
    }, 2000)
  })
  throw promise
}

function SuspenseElem() {
  const data = requestData()
  return <div>{data}</div>
}

function Index() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <SuspenseElem />
      <LazyComp />
    </Suspense>
  )
}

export default Index

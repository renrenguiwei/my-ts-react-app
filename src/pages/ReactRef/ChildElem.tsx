// 利用function声明组件
import React, { forwardRef } from 'react'

// 方法一、柯里化
// const ChildElem = forwardRef((props: object, ref: any) => {
//   return <input type="text" ref={ref} />
// })

// 方法二、function return后再次包裹
function ChildElem(props: object, ref: any) {
  return <input type="text" ref={ref} />
}

export default forwardRef(ChildElem)

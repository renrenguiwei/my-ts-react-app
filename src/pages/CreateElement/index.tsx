import React from 'react'

interface ElementProps {
  id: number
  keys: any
  children: any
}

function Index(props: ElementProps) {
  console.log('props===>', props)
  return (
    <div className="a1" key="keys">
      <span>我是组件</span>
      {props.children}
    </div>
  )
}
export default Index

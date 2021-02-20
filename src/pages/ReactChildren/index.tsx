import React from 'react'

export default () => {
  return (
    <ChildrenElem a={1}>
      <div className={'2'}>12</div>
    </ChildrenElem>
  )
}

function ChildrenElem(props: any) {
  console.log(props)
  // 类似于数组的map方法，但会将返回的值拍平
  console.log(React.Children.only(props.children))
  console.log(props.children)
  return React.Children.map(props.children, (c) => [c, c, [c, c]])
}

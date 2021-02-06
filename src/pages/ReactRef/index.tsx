import React, { Component } from 'react'

class Index extends Component {
  private objRef: any
  private eleRef: any

  constructor(props: {}) {
    super(props)
    this.objRef = React.createRef()
  }

  componentDidMount() {
    setTimeout(() => {
      // 方法一、 未来某个版本会被放弃，现在遗留
      if ('textContent' in this.refs.stringRef) this.refs.stringRef.textContent = 'string ref'
      // 方法二、callBack
      this.eleRef.textContent = 'functional ref'
      // 方法三、createRef
      this.objRef.current.textContent = 'create ref'
    }, 2000)
  }

  render() {
    return (
      <>
        <p ref="stringRef">span1</p>
        <p ref={(ele) => (this.eleRef = ele)}>span2</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}

export default Index

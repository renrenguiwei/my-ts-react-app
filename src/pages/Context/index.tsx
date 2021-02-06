import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

/**
 * methods:
 * 1. childContextType
 * 2. createContext
 */

const { Provider, Consumer } = createContext('default')

class Parent extends Component {
  static childContextTypes: {}
  state = {
    newContext: '',
    newApiContext: ''
  }

  // 1. context暴露内容
  getChildContext() {
    const { newContext } = this.state
    return {
      value: newContext,
      name: 'claus'
    }
  }

  render() {
    const { newContext, newApiContext } = this.state
    return (
      <>
        {/* 方法二：新api包裹信用即可 */}
        <Provider value={newApiContext}>
          <div>
            old api:{' '}
            <input type="text" value={newContext} onChange={(e) => this.setState({ newContext: e.target.value })} />
          </div>
          <div>
            new api:{' '}
            <input
              type="text"
              value={newApiContext}
              onChange={(e) => this.setState({ newApiContext: e.target.value })}
            />
          </div>
          <Children />
        </Provider>
      </>
    )
  }
}

class Children extends Component {
  static contextTypes: {}
  render() {
    // 3. 获取值
    return (
      <div>
        <div>
          old api export: {this.context.value} {this.context.name}
        </div>
        <div>
          {/* 包裹取值 */}
          new api export:<Consumer>{(value) => value}</Consumer>
        </div>
      </div>
    )
  }
}

// 2. 父子定义类型
Parent.childContextTypes = {
  value: PropTypes.string,
  name: PropTypes.string
}
Children.contextTypes = {
  value: PropTypes.string,
  name: PropTypes.string
}

export default Parent

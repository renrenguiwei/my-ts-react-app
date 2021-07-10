import * as React from 'react'
import withWindowSize from '@/HOC/withWindowSize'

class Index2 extends React.Component<any, any> {
  render() {
    const { windowSize } = this.props
    return <div>{windowSize}</div>
  }
}

export default withWindowSize(Index2)

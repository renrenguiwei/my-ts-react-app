import React, { Component } from 'react'

interface AppProps {}
interface AppState {
  list: Array<any>
}

class Index extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      list: [1, 2, 3, 4]
    }
  }

  updateList = () => {
    let { list } = this.state
    // const list = [...this.state.list]
    // const _list = list.map((item) => item + 1)
    list.forEach((item, index) => (list[index] += 1))
    console.log(list)
    this.setState({
      list: list
    })
  }

  render() {
    const { list } = this.state
    return (
      <>
        <div>
          {list.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <button onClick={() => this.updateList()}>Update List</button>
      </>
    )
  }
}

export default Index

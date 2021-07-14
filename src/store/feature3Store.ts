import { observable, action, computed, flow, makeObservable, makeAutoObservable } from "mobx";

class feature3Store {
  public val: string = ''
  public todoList: Array<any> = []
  public typeStatus: string = ''
  constructor() {
    makeObservable(this, {
      val: observable,
      todoList: observable,
      addTodo: action,
      totalNumber: computed,
      fetchData: flow,
      renderNames: action
    })

    /**
     * 结构点：
     * 可观察对象：observable对象、computed派生结果
     * 1. computed 从可观察对象派生信息
     * 2. autorun同computed，但创建会运行一次
     *  1) 返回一个disposer函数，停止执行并且取消订阅所使用的任何可观察对象
     */
    // makeAutoObservable(this)
  }

  addTodo (value: string) {
    this.val = ''
    this.todoList.push(value)
  }

  get totalNumber () {
    return this.todoList.length
  }
  get totalNumber2 () {
    return this.totalNumber + 1
  }

  *fetchData():Generator {
    const response: any = yield fetch("https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list")
    // return response.json()?.data || []
    const data: any =  yield response.json()
    const nameArr = data?.data.map((item:any) => item.username)
    this.todoList = nameArr || []
  }

  async fetchDataAsync() {
    const response: any = await fetch("https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list")
    // return response.json()?.data || []
    const data: any =  await response.json()
    const nameArr = data?.data.map((item:any) => item.username)
    // 注意点：注意【严格模式】
    this.renderNames(nameArr)
    // this.todoList = nameArr
  }

  renderNames (val:Array<any> = []) {
    this.todoList = val
  }

}

export default new feature3Store()
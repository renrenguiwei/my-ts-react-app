import { observable, action, computed, flow, makeObservable, makeAutoObservable } from "mobx";

class feature2Store {
  public val: string = ''
  public todoList: Array<any> = []
  constructor() {
    // makeObservable(this, {
    //   val: observable,
    //   todoList: observable,
    //   addTodo: action,
    //   totalNumber: computed,
    //   fetchData: flow,
    //   renderNames: action
    // })
    // 注意点：自动推断简洁、写起来容易，但有时候如果你更了解【注解】可以
    // 避免页面更多不必要的隐患
    makeAutoObservable(this)
  }

  addTodo (value: string) {
    this.todoList.push(value)
  }

  get totalNumber () {
    return this.todoList.length
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

export default new feature2Store()
import { observable, action, computed, flow, makeObservable, makeAutoObservable } from "mobx";

class feature1Store {
  public val: string = ''
  public todoList: Array<any> = []
  constructor() {
    makeObservable(this, {
      val: observable,
      todoList: observable,
      addTodo: action,
      totalNumber: computed,
      fetchData: flow
    })
    // makeAutoObservable(this)
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
    this.todoList = nameArr || []
  }
}

export default new feature1Store()
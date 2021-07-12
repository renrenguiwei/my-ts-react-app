import { observable, action, computed, makeObservable, makeAutoObservable } from "mobx";

class feature1Store {
  public val: string = ''
  public todoList: Array<any> = []
  constructor() {
    // makeObservable(this, {
    //   val: observable,
    //   todoList: observable,
    //   addTodo: action,
    //   totalNumber: computed
    // })
    makeAutoObservable(this)
  }

  addTodo (value: string) {
    this.todoList.push(value)
  }

  get totalNumber () {
    return this.todoList.length
  }
}

export default new feature1Store()
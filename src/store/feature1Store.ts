import { observable, action, computed, makeObservable, makeAutoObservable } from "mobx";

class feature1Store {
  constructor() {
    makeObservable(this)
  }
  @observable val: string = ''
  @observable todoList: Array<any> = []

  // @action
  addTodo (value: string) {
    this.todoList.push(value)
  }

  @computed
  get totalNumber () {
    return this.todoList.length
  }
}

export default new feature1Store()
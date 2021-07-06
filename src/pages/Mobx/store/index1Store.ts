// import { action, observable } from 'mobx'
import { makeAutoObservable } from 'mobx'
class Index1Store {
  constructor() {
    makeAutoObservable(this)
  }
  public count = 0
  public setValue = (key: keyof Index1Store, value: any) => {
    console.log(key, value)
    this[key] = value as never
  }
}

let name: keyof Index1Store
name = 'setValue'
// console.log('name', name)

// export default new TestStore()
export default new Index1Store()

import { autorun, observable } from './mobx'

function Main() {
  const store = observable({a: 1, b: 1})
  autorun(() => {
    console.log(store.a)
  })

  store.a = 1000
  store.a = 1001
  return null
}

export default Main
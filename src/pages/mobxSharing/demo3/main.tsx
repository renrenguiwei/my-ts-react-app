import { autorun, observable } from './mobx'

function Main() {
  const store = observable({a: 1, b: 1})
  autorun(() => {
    console.log(store.b)
  })

  store.a = 2
  return null
}

export default Main
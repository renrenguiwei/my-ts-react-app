import { autorun, observable } from './mobx'

function Main() {
  const store = observable({a: 1, b: {c: 1}})
  autorun(() => {
    console.log(store.b.c)
  })

  store.b.c = 2
  return null
}

export default Main
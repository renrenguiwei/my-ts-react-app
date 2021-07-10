import { observable, autorun, configure } from 'mobx'
configure({
  enforceActions: 'never'
})

const store = observable({ a: 1, b: 2, c: { d: 3 } })
autorun(() => {
  console.log(store.c.d)
})

store.a = 5
store.a = 10
store.b = 10
store.c.d = 10

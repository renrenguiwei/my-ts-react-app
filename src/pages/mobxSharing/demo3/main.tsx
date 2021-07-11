import { autorun, observable } from './mobx'

function Main() {
  const store = observable({a: 1, b: 1})
  autorun(() => {
    if (store.a === 2) {
      /**
       * 条件语句限制，没有收集依赖
       */
      console.log(store.b)
    }
  })

  store.a = 2
  store.b = 3
  store.b = 4
  return null
}

export default Main
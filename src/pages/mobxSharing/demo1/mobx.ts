import { logDOM } from "@testing-library/react";

export default class EventEmitter {
  list: { [index: string]: any } = {}
  on(event: any, fn: any) {
    console.log('events, on', this.list)
    if (!this.list[event]) {
      this.list[event] = []
      console.log('not to be')
    }
    if (!this.list[event].includes(fn)) {
      this.list[event].push(fn)
      console.log('not to be', 'push')
    }
  }
  emit(event: any, ...args: any) {
    console.log('events, emit', this.list)
    const fns = this.list[event]
    // 判断大于0，依次执行
    if (fns?.length > 0) {
      fns.forEach((fn: any) => {
        fn && fn(...args)
      })
    }
  }
}

const em = new EventEmitter()
const store = {a: 1, b: 2}

// autorun
const fn = () => console.log(store.a)

// observable
Object.defineProperty(store, 'a', {
  get: function() {
    console.log('get')
    em.on('store.a', fn)
    return 9527
  },
  set: function() {
    console.log('set')
    em.emit('store.a')
  },
})

fn()

store.a = 5042
























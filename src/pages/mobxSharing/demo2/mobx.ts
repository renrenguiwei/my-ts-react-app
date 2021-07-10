export class EventEmitter {
  list: { [index: string]: any } = {}
  on(event: any, fn: any) {
    console.log('events, on', this.list)
    if (!this.list[event]) {
      this.list[event] = []
    }
    if (!this.list[event].includes(fn)) {
      this.list[event].push(fn)
      console.log(this.list)
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
let currentFn: any
let obId = 0

/**
 * 疑问点：
 * 1. currentFn首页auto自执行时才会有，不用currentFn做判断，EventEmitter也会根据id做判断
 *    解读：但set时会触发autorun走get，此时不需要注册事件，所以要用currentFn做过滤
 *
 * 2. 用Symbol复制原值,为了get输出不因为直接return obj.a造成死循环，但直接深拷贝也是可以做到的，symbol更高级点
 *
 * 3. obId在定义时遍历变量递增，有自己的函数作用域；get、set是在对象读写操作时触发
 *
 * 4. store.b.c的this为递归observable(obj[key])的b，key为c
 */

// autorun
export const autorun = (fn: any) => {
  currentFn = fn
  fn()
  currentFn = null
}

// observable
export const observable = (obj: any) => {
  // Symbol类型目的：不让自定义key干扰原key
  const data = Symbol('data')
  // 复制原值，用于计算处理
  obj[data] = JSON.parse(JSON.stringify(obj))
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      observable(obj[key])
    }else {
      // 生成Event唯一channel ID
      const id = String(++obId)
      Object.defineProperty(obj, key, {
        get: function() {
          if (currentFn) {
            em.on(id, currentFn)
          }
          return obj[data][key]
        },
        set: function(val) {
          if (obj[data][key] !== val) {
            obj[data][key] = val
            em.emit(id)
          }
        },
      })
    }
  })
  return obj
}
























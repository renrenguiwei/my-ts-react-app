// export class EventEmitter {
//   list: { [index: string]: any } = {}
//   on(event: any, fn: any) {
//     console.log('events, on', this.list)
//     if (!this.list[event]) {
//       this.list[event] = []
//     }
//     if (!this.list[event].includes(fn)) {
//       this.list[event].push(fn)
//       console.log(this.list)
//     }
//   }
//   emit(event: any, ...args: any) {
//     console.log('events, emit', this.list)
//     const funcs = this.list[event]
//     // 判断大于0，依次执行
//     if (funcs?.length > 0) {
//       funcs.forEach((func: any) => {
//         func && func(...args)
//       })
//     }
//   }
// }
export class EventEmitter {
  private list = new WeakMap()
  on(obj: any, key: any, fn: any) {
    console.log('events, on', this.list)
    let targetObj = this.list.get(obj) || {}
    let funcs = targetObj[key] || []
    if (!funcs.includes(fn)) {
      funcs.push(fn)
      targetObj[key] = funcs
      this.list.set(obj, targetObj)
    }
  }
  emit(obj: any, key: any, ...args: any) {
    console.log('events, emit', this.list)
    let targetObj = this.list.get(obj) || {}
    let funcs = targetObj[key] || []
    // 判断大于0，依次执行
    if (funcs?.length > 0) {
      funcs.forEach((func: any) => {
        func && func(...args)
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
// export const autorun = (fn: any) => {
//   currentFn = fn
//   fn()
//   currentFn = null
// }
export const autorun = (fn: any) => {
  const wrapFn = () => {
    // 关键点：每次执行set时，都会重新执行wrapFn，赋值给currentFn
    // 收集其它依赖，这里不太好理解
    currentFn = wrapFn
    fn()
    currentFn = null
  }
  wrapFn()
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
      // const id = String(++obId)
      Object.defineProperty(obj, key, {
        get: function() {
          if (currentFn) {
            em.on(obj, key, currentFn)
          }
          return obj[data][key]
        },
        set: function(val) {
          if (obj[data][key] !== val) {
            obj[data][key] = val
            em.emit(obj, key)
          }
        },
      })
    }
  })
  return obj
}
























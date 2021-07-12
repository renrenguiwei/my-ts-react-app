// 维护一个map存唯一键值
const mapIds = new WeakMap()
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
export const observable = (obj: any): any => {
  return new Proxy(obj, {
    get: (target, key) => {
      if (typeof target[key] === 'object') {
        return observable(target[key])
      }else {
        if (currentFn) {
          // if (!mapIds.get(target)) {
          //   mapIds.set(target, {})
          // }
          // const mapObj = mapIds.get(target)
          // const id = String(++obId)
          // // 对象引用，并隐式赋值方式不太方便理解
          // mapObj[key] = id
          // em.on(id, currentFn)
          em.on(target, key, currentFn)
        }
        return target[key]
      }
    },
    set: (target,  key, val) => {
      if (target[key] !== val) {
        target[key] = val
        // const mapObj = mapIds.get(target)
        // if (mapObj && mapObj[key]) {
        //   em.emit(mapObj[key])
        // }
        em.emit(target, key)
      }
      return true
    },
  })
}

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
 *
 * 5. proxy代理，为何最后打印的对象会重复？
 */
























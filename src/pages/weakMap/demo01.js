let wm = new WeakMap()
let map = new Map()

let b = {c : 1, d: 2}

wm.set(b, 1)
map.set(b, 1)

b = null

console.log(wm.get(b))
console.log(map.get(b))

console.log('map', map.keys())

/**
 * 特性：
 * 1. key值作为【引用的对象】被清除，此WeakMap自动被垃圾回收，有利于防止内存泄漏
 * 2. 不可枚举
 * 3. key为object类型
 */
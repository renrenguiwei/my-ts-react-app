let wm = new WeakMap()
let map = new Map()

let b = {c : 1, d: 2}

wm.set(b, 1)
map.set(b, 1)

b = null

console.log(wm.get(b))
console.log(map.get(b))

console.log('map', map.keys())
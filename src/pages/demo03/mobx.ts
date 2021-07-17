import EventEmitter from '@/utils/event-emitter';

const em = new EventEmitter();
let currentFn: any;
let obId = 1;

const autorun = (fn: any) => {
  const warpFn = () => {
    currentFn = warpFn;
    fn();
    currentFn = null;
  }
  warpFn();
  /**
   * 突破点
   * 1. autorun执行，但会受到store.a === 2的拦截
   * 2. set方法时，每次都会on 订阅
   *
   * 所以将整个fun塞到this.list内部，那么就会有currentFn存在
   */

  // currentFn = fn;
  // fn();
  // currentFn = null;
};

const observable = (obj: any) => {
  // 用 Symbol 当 key；这样就不会被枚举到，仅用于值的存储
  const data = Symbol('data');
  obj[data] = JSON.parse(JSON.stringify(obj));

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      observable(obj[key]);
    } else {
      // 每个 key 都生成唯一的 channel ID
      const id = String(obId++);
      Object.defineProperty(obj, key, {
        get: function () {
          if (currentFn) {
            em.on(id, currentFn);
          }
          return obj[data][key];
        },
        set: function (v) {
          // 值不变时不触发
          if (obj[data][key] !== v) {
            obj[data][key] = v;
            em.emit(id);
          }
        }
      });
    }
  });
  return obj;
};

export {
  autorun,
  observable
}
import EventEmitter from '@/utils/event-emitter-with-weakmap';

const em = new EventEmitter();
let currentFn: any;

const autorun = (fn: any) => {
  const warpFn = () => {
    currentFn = warpFn;
    fn();
    currentFn = null;
  }
  warpFn();
};

const observable = (obj: any): any => {
  return new Proxy(obj, {
    get: (target, propKey) => {
      if (typeof target[propKey] === 'object') {
        return observable(target[propKey]);
      } else {
        if (currentFn) {
          /**
           * 1. obj -> (整个、c节点) -> (a/c) -> (1/2) - >[Events]
           * 2. obj -> (整个、c节点) -> (a/c) - >[Events]
           * 总结：
           *  1. 省略了用Ids做索引中介
           *  2. Event赋值放在emit内部
           */
          em.on(target, propKey, currentFn);
        }
        return target[propKey];
      }
    },
    set: (target, propKey, value) => {
      if (target[propKey] !== value) {
        target[propKey] = value;
        em.emit(target, propKey);
      }
      return true;
    }
  });
};

export {
  autorun,
  observable
}
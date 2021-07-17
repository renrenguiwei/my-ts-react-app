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
};

const map = new WeakMap();

const observable = (obj: any): any => {
  return new Proxy(obj, {
    get: (target, propKey) => {
      if (typeof target[propKey] === 'object') {
        return observable(target[propKey]);
      } else {
        if (currentFn) {
          if (!map.get(target)) {
            map.set(target, {});
          }
          const mapObj = map.get(target);
          // 添加event值判断，有的情况不会变化id，保持list永远只有一个事件对
          if (!mapObj[propKey]) {
            const id = String(obId++);
            mapObj[propKey] = id;
            em.on(id, currentFn);
          }
        }
        return target[propKey];
      }
    },
    set: (target, propKey, value) => {
      if (target[propKey] !== value) {
        target[propKey] = value;
        const mapObj = map.get(target);
        if (mapObj && mapObj[propKey]) {
          em.emit(mapObj[propKey]);
        }
      }
      return true;
    }
  });
};

export {
  autorun,
  observable
}
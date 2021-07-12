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
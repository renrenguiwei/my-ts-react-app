export default class EventEmitter {
  list = new WeakMap();
  on(obj: any, event: any, fn: any) {
    let targetObj = this.list.get(obj);
    if (!targetObj) {
      targetObj = {};
      this.list.set(obj, targetObj);
    }
    let target = targetObj[event];
    if (!target) {
      targetObj[event] = [];
      target = targetObj[event];
    }
    if (!target.includes(fn)) {
      target.push(fn);
    }
    console.log('event list', this.list)
  };
  emit(obj: any, event: any, ...args: any) {
    const targetObj = this.list.get(obj);
    if (targetObj) {
      const fns = targetObj[event];
      if (fns && fns.length > 0) {
        fns.forEach((fn: any) => {
          fn && fn(...args);
        });
      }
    }
  }
};


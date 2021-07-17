export default class EventEmitter {
  list: any = {};
  on(event: any, fn: any) {
    let target = this.list[event];
    if (!target) {
      this.list[event] = [];
      target = this.list[event];
    }
    if (!target.includes(fn)) {
      target.push(fn);
    }
    console.log('eventList', Object.keys(this.list))
  };
  emit(event: any, ...args: any) {
    const fns = this.list[event];
    if (fns && fns.length > 0) {
      fns.forEach((fn: any) => {
        fn && fn(...args);
      });
    }
  }
};


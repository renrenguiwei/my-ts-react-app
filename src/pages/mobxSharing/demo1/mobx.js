"use strict";
exports.__esModule = true;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.list = {};
    }
    EventEmitter.prototype.on = function (event, fn) {
        console.log('events, on', this.list);
        if (!this.list[event]) {
            this.list[event] = [];
            console.log('not to be');
        }
        if (!this.list[event].includes(fn)) {
            this.list[event].push(fn);
            console.log('not to be', 'push');
        }
    };
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log('events, emit', this.list);
        var fns = this.list[event];
        // 判断大于0，依次执行
        if ((fns === null || fns === void 0 ? void 0 : fns.length) > 0) {
            fns.forEach(function (fn) {
                fn && fn.apply(void 0, args);
            });
        }
    };
    return EventEmitter;
}());
exports["default"] = EventEmitter;
var em = new EventEmitter();
var store = { a: 1, b: 2 };
// autorun
var fn = function () { return console.log(store.a); };
// observable
Object.defineProperty(store, 'a', {
    get: function () {
        console.log('get');
        em.on('store.a', fn);
        return 9527;
    },
    set: function () {
        console.log('set');
        em.emit('store.a');
    }
});
fn();
store.a = 5042;

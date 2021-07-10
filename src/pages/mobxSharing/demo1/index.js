"use strict";
exports.__esModule = true;
var mobx_1 = require("mobx");
mobx_1.configure({
    enforceActions: 'never'
});
var store = mobx_1.observable({ a: 1, b: 2, c: { d: 3 } });
mobx_1.autorun(function () {
    console.log(store.c.d);
});
store.a = 5;
store.a = 10;
store.b = 10;
store.c.d = 10;

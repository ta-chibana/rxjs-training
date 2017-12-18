"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var add = function (a, b) {
    return a + b;
};
var multi = function (a, b) {
    return a * b;
};
console.log(add(1, 3));
console.log(multi(4, 2));
Rx_1.Observable.of('HelloWorld').subscribe(function (text) { return console.log(text); });

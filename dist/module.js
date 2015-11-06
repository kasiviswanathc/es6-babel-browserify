(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    return b * b;
};

var variable = 8;

var MyClass = (function () {
    function MyClass(input) {
        _classCallCheck(this, MyClass);

        this.name = input.name;
        this.empId = input.empId;
    }

    MyClass.prototype.getName = function getName() {
        return this.name;
    };

    return MyClass;
})();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

// 25
console.log(_import.square(5));

var inputData = {
    name: 'Kasi Chandran',
    empId: 1000
};

var o = new _import.MyClass(inputData);

console.log(o.getName());

},{"./import":1}]},{},[2]);

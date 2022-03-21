function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + '입니다';
    }
}

module.exports = Person;

const Person = require('./export되는 commonJS 파일');

const me = new Person('jeong', 10, 'korea')
const you = new Person('kim', 10, 'seoul')

me.getName();
you.getName();

(function (root, factory) {
    if (typeof exports === 'object' && module.exports) {
        // CommonJS
        module.exports = factory(require('module'))
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['module'], function (module) { })
    } else {
        // 전역공간
        root.global = factory(rood.module)
    }
} (this, function (module) {
    // 실제 모듈
}))
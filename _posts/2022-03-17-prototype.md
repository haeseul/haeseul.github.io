---
layout: single
title: "[JavaScript] Prototype과 Constructor"
---

## Prototype

JavaScript는 프로토타입 기반의 언어이기 때문에 Wrapper에 따라 내부적으로 모든 프로토타입을 가지고 있다.

## Constructor

프로토타입을 통해 어떤 생성자로부터 생성되었는지 유추할 수 있다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const jeong = new Person('jeong', 99);
const hs = new Person('hs', 11);

jeong.constructor.name; // Person
hs.constructor.name;    // Person

const obj = {};
const arr = [];
const func = function () {};
const str = new String('str');

obj.constructor.name;    // Object
arr.constructor.name;    // Array
func.constructor.name;   // Function
str.constructor.name;    // String
```

`instanceof` 연산자로 생성자의 프로토타입 속성이 객체의 프로토타입에 존재하는지 판별한다. (`object instanceof constructor`)

```js
obj instanceof Object;     // true
arr instanceof Array;      // true
func instanceof Function;  // true
str instanceof String;     // true
```

## \_\_proto__ (던더 프로토)

JS 프로토타입에 직접 접근하지 않고 getter, setter와 같은 접근제어자로 접근하도록 도와준다.
던더 프로토보다는 `Object.getPrototypeOf`나 `Object.setPrototypeOf`를 사용해 권장되는 표준에 따른 프로토타입에 접근하는 것이 좋다.


## 프로토타입 체인

```js
// 스코프 체인
{
    const a = 'outer'
    {
        const a = 'inner'
        console.log(a)  // inner
    }
}

// 메서드 체인
[1,2,3]
    .sort((a,b) => a-b)
    .filter((e) => typeof e === 'number')
    .map((e) => e + 'EA);
```

```js
const animal = {
    sayName() {
        return 'ANIMAL';
    },
};

const dog = Object.create(animal);  // 인스턴스 생성
dog.sayName();  // ANIMAL -> dog 인스턴스에 메서드가 없어도 animal의 메서드 사용 가능
```

## 프로토타입 확장 (= 상속)

```js
// Super Class
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function() {
    return this.name + '가(이) ' + this.sound + ' 소리를 낸다.'
}

function Friends(name, sound) {
    // 명시적 바인딩
    Animal.call(this, name, sound);
}

// Sub Class
Friends.prototype = Object.create(
    Animal.prototype,
)

Friends.prototype.constructor = Friends;

const dog = new Friends('개', '멍멍')
const cat = new Friends('고양이', '야옹')

console.log(dog.getInfo())
console.log(cat.getInfo())

console.log(dog.constructor.name)   // Frineds
console.log(cat.constructor.name)   // Frineds

console.log(dog instanceof Friends) // true
console.log(dog instanceof Animal) // true
```
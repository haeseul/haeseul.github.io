---
layout: single
title: "JavaScript 기초"
---

# JS 기초

## JS 배경

- 자바 - 문법
- 스키마 - 일급 객체 & 클로저
- 하이퍼토크 - 브라우저 이벤트 처리
- 펄, 파이썬 - 문자열, 배열, 정규표현식
- 셀프 - 프로토타입 확장
- 오크 - 함수

## ECMAScript (ES)

- JS : 프로그래밍 언어
- ECMAScript : 언어의 명세
    - 언어의 버전을 설명
    - JS는 유연한 언어이기 때문에 항상 ES를 확인해야 한다!
    

## JavaScript Everywhere!

- JS는 브라우저만 있으면 동작할 수 있다
- Node.js는 크롬 V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
- Electron framework 를 통해 애플리케이션 생성

<br><br>

# 변수 선언과 할당

1. 변수 선언 키워드
    - `var, let, const`
2. 선언과 동시에 할당
    - `const count = 0;`

<br><br>

# 자료형
JavaScript는 동적 언어이기 때문에 변수 타입을 미리 선언할 필요가 없다.  
즉 같은 변수에 여러 타입의 값을 넣을 수 있다.
```javascript
var foo = 42;   // foo는 이제 Number
var foo = "bar";   // foo는 이제 String
var foo = true;   // foo는 이제 Boolean
```

<br>

## 1. 기본 타입 (Primitive value)

- 변경이 불가능한 값 (값 그 자체)
```js
const test = 'string'
console.log(test.toUpperCase()) // STRING
console.log(test)               // string
```
- undefined, Boolean, Number, String
    - 동등 연산자로 타입의 엄격한 비교, 느슨한 비교 가능
        
```javascript
const stringNum = '0'

if (num == 0) {
    console.log('num은 0입니다');       // 느슨한 비교
} else {
    console.log('num은 0이 아닙니다');  // ===일 때의 엄격한 비교
}
```
<br>

## 2. 객체 타입 (Reference value)
- 리터럴 방식의 객체, 배열, 함수
```javascript
const obj = {
    name: 'jeong',  // 메모리 주소 안에 실제 값 입력
    age: 11,
    arr: [],
    func: function() {}
}

const arr = ['jeong', [], 11, function () {}]

function func() {return 'jeong'}
```

<br><br>

# DOM
DOM은 문서 객체 모델(The Document Object Model)로서 <b>HTML, XML 문서의 프로그래밍 인터페이스</b>(문서 구조, 스타일, 내용 등)를 변경할 수 있게 돕는다.  

코드는 자바스크립트로 작성되고, <b>문서(document) 와 문서의 요소(element) 에 접근</b>할 때는 DOM을 사용한다.

```javascript
var paragraphs = document.getElementsByTagName("P");
alert(paragraphs[0].nodeName);
```

DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공하기 위해 nodes와 objects로 문서를 표현한다.

<br><br>

# 식별자
식별자는 코드 내의 변수, 함수, 속성을 식별하는 문자열이다.

JavaScript의 식별자는 대소문자, 유니코드 글자, $, _, 숫자로 구성되며 숫자로 시작할 수 없다.

식별자는 코드의 일부이지만 문자열은 데이터이기 때문에 차이가 있다.

<br><br>

# use strict
기존에 조용히 무시되던 에러들을 throwing 하여 엄격한 모드로 JavaScript를 바꾸어준다.
```javascript
function func() {
    'use strict';       // 엄격모드
    console.log(this);  // undefined

    return 'hello';
}
```
ECMAScript 2015는 모듈에 strict mode를 적용하여 JavaScript 모듈의 전체 컨텐츠는 엄격 모드를 자동으로 실행한다.
```javascript
function strict() {
    // 모듈이기 때문에 기본적으로 엄격하다.
}
```

<br><br>

# Undifined & NULL
JavaScript는 느슨한 언어이기 때문에 undefined와 null 상태를 확실히 구분해서 사용해주어야 한다!
```js
let variable;               // 선언만 한 상태 -> undefined
const initValue = null;     // null을 강제적으로 지정

console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0
```

<br><br>

# 형변환

## 1. 명시적 형변환
- !! --> Boolean
- Number(값), String(값), Boolean(값), Array.from(값)

## 2. 암시적 형변환
- string과 number --> string
- number와 number --> number
- 원하는 계산을 정상적으로 하고싶다면 명시적으로 예측 가능하게 작성해주는 것이 좋다
```js
const result1 = 1 + '입니다'    // 1입니다
console.log(typeof result1)     // string

const result2 = '11' + 11       // 1111
console.log(typeof result2)     // string

const result3 = '2' * '2'       // 4
console.log(typeof result3)     // number

const result4 = ['111'] + '111' // 111111
console.log(typeof result4)     // string
```
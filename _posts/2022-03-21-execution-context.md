---
layout: single
title: "[JavaScript] 실행 컨텍스트(EC)"

categories:
  -  JS advance
tags:
  - [JS, Execution Context, GEC, FEC]

toc: true
toc_sticky: true
---


## 실행 컨텍스트

https://tc39.es/ecma262/#sec-execution-contexts 를 통해 최신 명세를 확인할 수 있다.

실행 컨텍스트(EC; Execution Context)는 JS가 실행되는 방식을 담고 있는 핵심 원리이다. 즉, **JS 엔진이 코드를 읽고, 실행에 필요한 정보를 모아놓는 것**이다. 실행 컨텍스트는 종류에 따르거나 단계에 따라 정보를 분류한다.

### 1. 종류

#### - Global: 전역 (GEC)

this와 전역 Object가 바인딩되는 전역 공간이다.

#### - Function: 함수 (FEC)

상위 컨텍스트, this, 매개변수, arguments에 대한 컨텍스트에 접근할 수 있다.

<br>

### 2. 단계

```js
var name = "hs";

function hello() {
    console.log(this.name);
    console.log(name);
}
```

#### - 생성단계 (Creation Phase)

JS 엔진이 함수를 호출했지만 실행이 시작되지 않은 단계
1. 전역 객체 생성
   - JS 실행부터 종료까지 유지
2. 변수 생성
3. 변수는 undefined로 초기화 (**호이스팅**)
   - 호이스팅: 코드가 실행되기 전임에도 불구하고 자바스크립트 엔진은 이미 해당 환경에 속한 코드의 변수명들을 모두 알 수 있다.
4. hello 함수는 메모리에 위치


#### - 실행단계 (Execution Phase)

전역 변수의 값 할당이 발생하며 코드를 실행하는 단계
1. 함수 호출시 함수 실행 컨텍스트 생성
2. this의 arguments로 접근 가능
3. GEC에서 생성된 환경에 접근 가능
4. 만약 함수가 다른 함수 호출 시(call stack) 새로운 함수의 실행 컨텍스트 생성되며 반복

<br>
<hr>

### 정리

- 실행 컨텍스트는 **전역 컨텍스트**와 **함수 컨텍스트**로 이루어져 있다. (Eval도 있지만 잘 사용하지 않음)
- 전역 컨텍스트는 JS의 **시작부터 종료까지 계속 유지**된다.
- 전역 컨텍스트에서 함수 컨텍스트 실행할 수 있다.
- 실행된 **함수는 Call Stack**으로 호출, 실행, 종료한다.
- 함수 컨텍스트는 상위 컨텍스트에 접근할 수 있기 때문에 **Scope Chain**을 이용할 수 있다.

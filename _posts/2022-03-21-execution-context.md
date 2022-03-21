---
layout: single
title: "실행 컨텍스트(EC)"
---


## 실행 컨텍스트

https://tc39.es/ecma262/#sec-execution-contexts 를 통해 최신 명세를 확인할 수 있다.

실행 컨텍스트(EC; Execution Context)는 JS가 실행되는 방식을 담고 있는 핵심 원리이다. 즉, JS 엔진이 코드를 읽고, 실행에 필요한 정보를 모아놓는 것이다. 종류에 따르거나 단계에 따라 정보를 분류한다.

### 종류

#### - Global: 전역 (GEC)

this와 전역에서 선언한 Object가 바인딩되는 전역 공간이다.

#### - Function: 함수 (FEC)

상위 컨텍스트, this, 매개변수, arguments에 대한 컨텍스트에 접근할 수 있다.

<br>

### 단계

#### - 생성단계 (Creation Phase)

JS 엔진이 함수를 호출했지만 실행이 시작되지 않은 단계
1. 전역 객체 생성
2. 변수 생성
3. 변수는 undefined로 초기화 (**호이스팅**)
4. hello 함수는 메모리에 위치


#### - 실행단계 (Execution Phase)

전역 변수의 값 할당이 발생하며 코드를 실행하는 단계
1. 함수 호출시 함수 실행 컨텍스트 생성
2. this의 arguments로 접근 가능
3. GEC에서 생성된 환경에 접근 가능
4. 만약 함수가 다른 함수 호출 시(call stack) 새로운 함수의 실행 컨텍스트 생성되며 반복


```js
var name;

function hello() {
    console.log(this.name);
    console.log(name);
}
```

함수는 Call Stack으로 호출, 실행, 종료
전역 컨텍스트에서 함수 컨텍스트 실행
함수 컨텍스트는 Call Stack, Scope Chain 이용 가능

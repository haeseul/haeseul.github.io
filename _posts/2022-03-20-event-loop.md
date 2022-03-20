---
layout: single
title: "이벤트 루프"
---

JS 엔진은 한 번에 한 개의 코드만 실행할 수 있다.
하지만 사용자의 환경은 동시에 많은 작업을 처리해야 하기 때문에 비동기 방식의 동시성을 지원하는 방식을 도입했고, 그것이 이벤트 루프이다.

JS가 브라우저와 만나면서 이벤트 루프 방식을 통하면 사용자의 많은 요청을 처리하는 방법을 우회해서 처리가 가능하다.

<br>

## Event Loop의 흐름

### JS Engine
   1) **Heap**
      - 구조화 되어있지 않은 단순한 영역 (객체가 할당)
      - 프로그램에 선언한 변수, 함수 등이 담겨있음
   2) **Call Stack**
      - Stack : 후입선출(LIFO, Last In First Out)
      - 함수 처리를 저장하는 영역
      - JS는 싱글 스레드 = Call Stack이 하나
      - Call Stack이 비워지는 순간 Task Queue에서 대기하던 함수들이 실행

### Web API
   - 사용자가 웹을 만들 때 사용할 수 있는 모든 인터페이스
     - DOM(Document), AJAX(XMLHttpRequest), Timeout(setTimeout)
   - Call Stack에서 실행된 비동기 함수는 Web API를 호출하고,
    Web API는 콜백함수를 Callback Queue에 밀어 넣는다.

### Task Queue (Callback Queue)
   - Queue : 선입선출(FIFO, First In First Out)
   - Web API에서 비동기 작업들이 실행된 후 호출되는 **콜백 함수들이 대기**

### Event Loop
   - **Tick** : Call Stack이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 밀어넣는 행위

 
    1. JS 엔진 실행
    2. Call Stack에 코드가 쌓임
    3. Stack의 제일 마지막에 쌓인 코드가 실행됨(LIFO)
    4. 이때, 비동기함수가 실행된다면 Web API 호출
    5. Web API는 비동기함수의 콜백함수를 Callback Queue에 추가
    6. Event Loop는 Call Stack이 비워지면
       Callback Queue에 있는 첫 콜백함수를(FIFO) Call Stack으로 이동

<hr>
<br><br>

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

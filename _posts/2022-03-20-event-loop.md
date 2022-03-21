---
layout: single
title: "이벤트 루프"
---

JS 엔진은 한 번에 한 개의 코드만 실행할 수 있다.
하지만 사용자의 환경은 동시에 많은 작업을 처리해야 하기 때문에 비동기 방식의 동시성을 지원하는 방식을 도입했고, 그것이 이벤트 루프이다.

JS가 브라우저와 만나면서 이벤트 루프 방식을 통하면 사용자의 많은 요청을 처리하는 방법을 우회해서 처리가 가능하다.

> JS는 싱글 스레드이기 때문에 한 번에 하나씩만 실행할 수 있다.
> 그러나 Event Loop 덕분에 멀티 스레드 처럼 보여진다!

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
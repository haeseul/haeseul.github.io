---
layout: single
title: "[JavaScript] Exception"

categories:
  -  JS advance
tags:
  - [JS, Exception, throw, error]

toc: true
toc_sticky: true
---

## 예외처리

특정 문 실행 시 에러가 발생된다면 나머지 코드를 계속 실행하는 것은 의미가 없어진다. 그렇기 때문에 사용자에게 일부러 에러를 낼 수도 있고, 우회하는 방법을 통해 예외를 처리할 수도 있다.

<br>

### try-catch

이전에 Promise를 통해서도 에러를 잡아낼 수 있었다.

`new Promise().then().catch().finally()`

이와 유사하게 에러를 잡아낼 수 있다.

```js
try {
    x();
} catch (e) {
    // try에서 에러 발생할 경우 실행되는 구문
    console.log(e); // [ReferenceError: x is not defined]
    console.error('에러 발생');
} finally {
    // 언제나 실행
}
```

<br>

### 에러 던지기 (throw)

회원가입 시 비밀번호가 너무 짧다거나 사용자가 로그인할 때 작성한 계정을 찾을 수 없는 경우 일부러 에러를 만들어서 사용자들에게 오류 상황임을 나타낼 수 있다.

- 로그인 실패 에러 처리

```js
function login(id, pw) {
    if (id === 'zero' && pw === 0000) {
        return true;
    }

    throw new Error('로그인 실패')
}
```

```js
try {
    login('one', 111);
} catch(e) {
    console.error(e)    // [Error: 로그인 실패]
    console.error('에러 발생')  // console에 출력
    window.alert(error)         // 사용자에게 노출
} finally {
    console.log('로그인 시도 시간: ' + new Date())
}
```

<br>

### 에러 스택으로 추적하기

```js
try {
    x();
} catch (e) {
    console.error(e.stack)
}
```

`e.stack`은 코드에 대한 에러 스택을 통해 어디서 에러가 발생했는지 추적할 수 있도록 해준다. 또는 브라우저에서 로그에서도 확인할 수 있다.

<br>

### 커스텀 에러

클래스로 **에러 객체를 확장**해 **커스텀**할 수 있다.

```js
class LoginError extends Error {
    constructor(message) {
        super(message)
        this.name = 'Login Error'
    }
}
```

아이디가 불일치하는 경우의 예시를 들어 에러 메시지를 세분화할 수도 있다.

```js
function login(id, pw) {
    if (id !== 'zero') {
        throw new LoginError('아이디 불일치');  
        // [Login Error: 아이디 불일치] name: 'Login Error'
        }

    if (id === 'zero' && pw === 0000) {
        return true;
    }

    throw new Error('로그인 실패');
}

try {
    login('one', 111);
} catch(e) {
    console.error(e)
    if (e instanceof LoginError) {
        // 커스텀 에러만을 잡을 수 있다
        console.error('로그인 에러가 발생했습니다')
    } else {
        console.error('에러 발생')
    }
} finally {
    console.log('로그인 시도 시간: ' + new Date())
}
```
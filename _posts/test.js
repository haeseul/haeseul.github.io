try {
    x();
} catch (e) {
    // try에서 에러 발생할 경우 실행되는 구문
    console.log(e); // [ReferenceError: x is not defined]
    console.error('에러 발생');
}

class LoginError extends Error {
    constructor(message) {
        super(message)
        this.name = 'Login Error'
    }
}

function login(id, pw) {
    if (id !== 'zero') {
        throw new LoginError('아이디 불일치');  // [Login Error: 아이디 불일치] name: 'Login Error'
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

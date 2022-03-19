let i = 0;

document.querySelector('input').addEventListener('keyup', () => {
    i = i + 1;
    console.log(i);
});

// 마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록 debounce 함수를 만들 수 있다.
// 실행시킬 함수, 지연시킬 밀리세컨드를 인자로 받는다
function debounce(callback, wait) {
    let timeout;    // 초기값: undefined

    // closure
    return function (...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => 
            callback.apply(context, args), wait);
    }
}


function throttle(callback, wait) {
    let timeout = null;

    return function (...args) {
        const context = this;

        if (!timeout) {
            timeout = setTimeout(() => {
                callback.apply(this, agrs);
                timeout = null;
            }, wait);
        }
    }
}

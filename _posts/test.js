const starbucks = function (coffeeName) {
    return new Promise((resolve, reject) => {
        if (coffeeName === '아메리카노') {
            resolve ('아메리카노 한잔입니다.');
        } else {
            reject ('아메리카노는 없습니다.');
        }
    });
};

// starbucks(drink)
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej))           // 아메리카노는 없습니다.
//     .finally(() => console.log('감사합니다.'));  // 감사합니다.

// starbucks('아메리카노')
//     .then((res) => console.log(res))            // 아메리카노는 한잔입니다.
//     .catch((rej) => console.log(rej))
//     .finally(() => console.log('감사합니다.'));  // 감사합니다.

async function americano(drink) {
    try {
        const result = await starbucks(drink);
        return result
    } catch (error) {
        console.log(error)
    } finally {
        console.log('감사합니다.')
    }
}

console.log(americano('아메리노'))
function sumTotal(...numbers) {
    return numbers.reduce(function(total, current) {
        return total + current
    }, 0);   // 0은 total의 초기값
}

console.log(sumTotal(1,2,3,4,5,6,7));

console.log(1);
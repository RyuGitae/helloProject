// function2.js

function addNumber(first, last) {
    var sum = first + last;
    return sum;
}

var result1 = addNumber(10, 20);
var result2 = addNumber(15, 25);
var result3 = addNumber(addNumber(10, 20), addNumber(15, 25));
// var result3 = addNumber(result1, result2);
console.log(`첫번째: ${result1}, 두번째: ${result2}`);
console.log(`총합은: ${result3}`);

function sumBetweenNum(first, last, num) {
    // 첫번째 매개값과 두번째 매개값의 사이의 값을 합.
    var sum = 0;
    for (var i = first; i < last; i++) {
        if(i % num == 0){
            sum += i;
        }
        // 홀수값만 더하도록.
        // if (i % 2 != 0) {
        //     sum += i;
        // }
    }
    return sum;
}

var result4 = sumBetweenNum(1, 10, 2);
var result5 = sumBetweenNum(1, 11, 3);

console.log(`1번째: ${result4}`);
console.log(`2번쨰: ${result5}`);

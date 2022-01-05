// function6.js
// UI 테스트: 화 ~ 월(자바스크립트)
// let sum = function sum(a, b) { // 실제 처리 구문
// function sum(a, b) { // function 정의(구)문
//     return a + b;
// }

let sum = function (first, last) { // function 표현식
    return first + last;
}

let anotherSum = sum;
console.log(sum(10, 20));
console.log(anotherSum(30, 40));

// Arrow Function(화살표 함수)
let getMinVal = (first, last) => {
    return first > last ? last : first;
}
// let getMinVal = function(first, last) {
// if(first > last) {
//     result = last;
// } else { 
//     result = first;
// }

// var result = first > last ? last : first; // 상황 연산자
// return result;
// }

console.log(getMinVal(10, 5));
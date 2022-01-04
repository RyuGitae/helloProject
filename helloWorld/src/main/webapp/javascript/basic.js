// basic.js

/*
    자바스크립트의 주석
    입니다.
*/
'use strict' // 잘못 사용된 변수가 있으면 오류 메세지 작동

var v1;
var myname = "Hong";
v1 = "hello, world";
v1 = 'nice, world';
v1 = 'nice, "world"';
v1 = 'nice, '+ myname;
v1 = `nice, ${myname}`;

v1 = 100;

v1 = 3.14;

var v2 = 10;

var result = v1 + v2;

var tureOrFalse = true;
trueOrFalse = false;
trueOrFalse = 10 < 20;
trueOrFalse = 10; // 0, null, undefined(변수 이름만 설정한 상태), ''(값이 없을때) => false
trueOrFalse = 'hello'; 
// trueOrFalse = null;
if(tureOrFalse) {
    console.log('참값입니다.');
} else {
    console.log('거짓이거나 값이 없습니다.');
}
console.log(result);
console.log(typeof result);

var str = '<ul>';
// str = str + '<li>Apple</li>'; 아래와 동일
str += '<li>Apple</li>';
str += '<li>Banana</li>';
str += '<li>Cherry</li>';
str += '</ul>';
document.write(str);

// var 변수선언 :
var num1 = 10;
// num3 = 30;
console.log('global: ' + num1);
// console.log('global: ' + num3);

function f1() {
    var num1 = 20;
    var num3 = 40;
    console.log('local: ' + num1);
}
f1(); 

console.log('global: ' + num1);
// console.log('global: ' + num3);
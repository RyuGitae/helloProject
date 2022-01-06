// string1.js

// var val = 'hello';
// val = new String('hello,world');
// // console.log(typeof val);
// console.log(val.substring(2, 3));


// var h3Tag = document.querySelector('h3');
// var text = h3Tag.innerHTML;
// var str = text.substring(2, 10);
// str = text.slice(1, 5);
// // str = val.substring(0,2);
// // console.log(h3Tag.innerHTML);
// var elem = document.getElementById('show');
// // elem.innerHTML = '<h3>Hello</h3>';
// elem.innerText = str;
// console.log(elem);

const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang';
person.toString();

const str = 'Hwang';
str.length;
let newStr = str.substring(1, 5); // index[1]에서 4번째 까지 출력
newStr = str.slice(-3, -1); // -값은 뒤에서 부터 

newStr = str.replace('a', ',').replace(',', '.');
console.log(newStr);

// 주민번호 : 000101-3123456, 990101-2123456
//           850101-1234567, 870101 2123456, 9201012123456
// 남자/여자 구별하는 function

function getGender(jm) {
    if (jm.length != 13 && jm.length != 14) {
        return; // 함수 종료.
    }
    // 7번째 위치 1,3:남자, 2,4:여자
    let genNum = jm.replace('-', '').replace(' ', '').substring(6, 7);
    genNum = jm.slice(-7, -6);
    let gender = '남자';

    if (genNum == '1' || genNum == '3') {
        gender = "남자";
    } else if (genNum == '2' || genNum == '4') {
        gender = "여자";
    } else {
        gender = 'None';
    }
    return gender;

}

console.log(getGender('850101-1234567')); // 남자.
console.log(getGender('870101 2123456')); // 여자.
console.log(getGender('9201012123456')); // 여자.
console.log(getGender('920101212345678')); // 여자.


console.log('hello'.toUpperCase().toLowerCase());

let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ', str2, '!!')); // concat은 + 연산자


let str3 = str1.concat(' ', str2, '!!');
console.log(str3);

let pos = str3.charAt(2); // charAt에 인덱스 위치값을 넣어주면 해당 되는 위치의 문자를 찾아 줌 
console.log(pos);
// hello world!!
let ary = str3.split(' '); // ' ' 에서 나눠줌
for (let str of ary) {
    console.log(str);
}

let temp = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non hic necessitatibus nam, cumque distinctio quisquam atque et obcaecati maiores, praesentium aliquam. Debitis eius a quod in repudiandae? Dolore, nisi.';
let tempAry = temp.split(' ');
console.log(tempAry.length);

let fruits = 'Apple Banana Cherry Melon';
// let fruitsAry = fruits.split(' ');
// console.log(fruitsAry);
let fruit = prompt('과일입력: ');

// function getLoc(fruit) {
//     let fruitsAry = fruits.split(' ');
//     let loc;
//     if (fruit == fruitsAry[0]) {
//         loc = '1번째';
//     } else if (fruit == fruitsAry[1]) {
//         loc = '2번째';
//     } else if (fruit == fruitsAry[2]) {
//         loc = '3번째';
//     } else if (fruit == fruitsAry[3]) {
//         loc = '4번째';
//     } else {
//         loc = '존재하지 않습니다.';
//     }
//     return loc;
// }

// banana, BANANA, BAnana
function getLoc(fruit) {
    // 0, null, '', undefined => false
    if(!fruit) {
        return;
    }
    let temp = fruits.split(' ');
    console.log(temp);
    let cnt = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].toUpperCase() == fruit.toUpperCase()) {
            cnt = i + 1;
        }
    }
    if(cnt == 0) {
        return '만족하는 값이 없습니다.';
    }
    return cnt + '번째';

}

console.log(getLoc(fruit));
// number1.js

let num1 = 100.123;

console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));
// 1 ~ 2 : 1.4 
//   2
//   1.4
//   1

// for(let i=0; i<10; i++)  {
//     let temp = Math.random();
//     console.log(temp);
// }

// console.log(parseInt(Math.random() * 5)); // 0 ~ 5 사이의 임의의 숫자
// console.log(Math.floor((Math.random() * 5) + 1)); // 1 ~ 6 사이의 임의의 숫자
let findVal = -1;
let order = parseInt(Math.random() * 9);
for (let i = 0; i < 9; i++) { //Math.random : 0과 1사이의 임의의수 출력
    let temp = parseInt(Math.random() * 9) + 1;
    document.write(`<div>${temp}</div>`);
    if (i % 3 == 2) {
        document.write('<br>');
    }
    if (i == order) {
        findVal = temp;
    }
}
window.alert(findVal + '을 찾으세요');

function clickFnc(e) {
    console.log(e.target.innerText);
    if (e.target.innerText == findVal) {
        window.alert(findVal + '를 찾았습니다!!');
        e.target.style.color = 'blue';
    }
}

let divElem = document.getElementsByTagName('div');
console.log(divElem); // index에 id= show인 div가 있어서 총 10개 
for (let i = 0; i < divElem.length; i++) {
    divElem[i].onclick = clickFnc;
}
// array1.js

let delBtn = document.getElementById('delBtn')
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    if(!sname) {
        alert('값을 입력하세요!!');
        return;
    }

    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) {
            list[i].style.display = 'none';
        }
    }
}








const numAry = [23, 17, 33, 72, 88];


// document.write('<ul>');
// for (i = 0; i < numAry.length; i++) {
//     document.write(`<li>${numAry[i]}</li>`);
// }
// document.write('</ul>');

// document.write('<ul>');
// for (i = 0; i < numAry.length; i++) {
//     document.write(`<li>${numAry[i]}</li>`);
// }
// document.write('</ul>');


let sum = 0;
numAry.forEach(function (item, idx, ary) { // 매개 값으로 함수가 쓰이는 경우 callback 함수
    if (idx % 2 == 0)
        sum += item;
});
console.log(`합계: ${sum}`);

const names = ['김은서', '황보경', '볼드모트', '류기태', '해리포터'];
// for (let i = 0; i < 3; i++) {
//     const name = window.prompt('추가 이름 입력>> ');
//     names.push(name);
// }

// const sname = window.prompt('삭제할 이름 입력>>');
// for (let i = 0; i < names.length; i++) {
//     if (names[i] == sname) {
//         names.splice(i, 1);
//     }
// }

// console.log(names);


// names.splice(1, 2); // 인덱스 위치, 갯수, 다음 값을 넣어주면 그 값으로 대체하고 안 넣으면 삭제 
// names.splice(1, 0, '누군가'); // 추가
// names.splice(1,1);

// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// console.log(list);
// list.forEach(function (item, idx, ary) {
//     console.log(item, idx, ary);
//     // console.log(item, item.innerHTML);
//     if (idx % 2 == 0)
//         item.innerHTML = '<h3>hello</h3>';
// });
// dom3.js

/* <div id="show"></div>
    <input type="text" id="sname">
    <button id="delBtn">조회삭제</button>
    <button id="addBtn">추가</button>
    <ul id="nameList">
        <li>김은서</li>
        <li>황보경</li>
        <li>고권영</li>
        <li>류기태</li>
        <li>구자현</li>
    </ul> */

// dom 생성.
let div = document.createElement('div');
div.setAttribute('id', 'show');

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('value', 'test');

let btn1 = document.createElement('button');
let textb1 = document.createTextNode('조회삭제');
btn1.appendChild(textb1);

let btn2 = document.createElement('button');
let textb2 = document.createTextNode('추가');
btn2.appendChild(textb2);

let ul = document.createElement('ul');
ul.setAttribute('id', 'nameList');
let sname = ['김은서', '황보경', '고권영', '류기태', '구자현']
for (i=0; i<sname.length; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(sname[i]);
    li.appendChild(text);
    ul.appendChild(li);
}

document.getElementById('bdy').appendChild(div);
document.getElementById('bdy').appendChild(input);
document.getElementById('bdy').appendChild(btn1);
document.getElementById('bdy').appendChild(btn2);
document.getElementById('bdy').appendChild(ul);

// sname.forEach(addList);

// function addList(item) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(item);
//     li.appendChild(text);
//     ul.appendChild(li);
// }

console.log(document.getElementById('bdy'));

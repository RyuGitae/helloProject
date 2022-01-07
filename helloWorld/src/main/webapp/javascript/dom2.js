// dom2.js

// document object model
// element(element node, attribute node, text node), tag 
// <img src ='sample.jpg'>, <input type='text' value='sample'>
let img = document.createElement('img');
img.setAttribute('src', '../images/edge.png');
img.setAttribute('id', 'mypicture');
img.setAttribute('width', '200px');

document.getElementById('show').appendChild(img); // ID가 show인 div의 자식요소로 붙여넣기
console.log(img);

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>;
// ul, li*3, li>text
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

// for (let fruit of fruits) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(fruit);
//     li.appendChild(text);
//     ul.appendChild(li);    
// }

// let li = document.createElement('li');
// let text = document.createTextNode('Apple');
// li.appendChild(text);
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Banana');
// li.appendChild(text);
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Cherry');
// li.appendChild(text);
// ul.appendChild(li);

// fruits.forEach(function (item) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(item);
//     li.appendChild(text);
//     ul.appendChild(li);
// });

fruits.forEach(callBackFnc);

function callBackFnc(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}

console.log(ul);

document.getElementById('bdy').appendChild(ul);


let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for (let i = 0; i < list.length; i++) {
        if(list[i].innerText == sname) {
            list[i].remove();
            break;
        }
    }
}


// 1)이벤트 등록.
// 2)이벤트 기능 : 사용자의 입력값 -> <li>입력값</li>
// 3)ul태그 찾고 ul 하위에 붙여넣기 

// let addBtn = document.getElementById('addBtn');
// addBtn.onclick = function () {
//     let sname = document.getElementById('sname').value;
//     let li = document.createElement('li');
//     li.innerText = sname;
//     let ul = document.querySelector('#nameList');
//     ul.appendChild(li);
// }

let addBtn = document.getElementById("addBtn");
addBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let li = document.createElement('li');
    let text = document.createTextNode(sname);
    li.appendChild(text);
    // let ul = document.querySelector('#nameList');
    // ul.appendChild(li);
    document.getElementById('nameList').appendChild(li);

    document.getElementById('sname').value =""; // 입력 후 공백
    document.getElementById('sname').focus(); // 삭제 후 공백
}
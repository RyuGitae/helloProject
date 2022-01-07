// dom_z.js

let btns = document.getElementsByTagName('button');
btns[0].addEventListener('click', delFnc);

function delFnc() {
    let inputs = document.getElementsByTagName('input');
    let sname = inputs[0].value;
    
    let list = document.getElementsByTagName('li');
    // console.log(list);
    for(let i=0; i<list.length; i++) {
        console.log(list[i].innerText);
        if(list[i].innerText == sname) {
            list[i].remove();
        }
    }
}

btns[1].addEventListener('click', addFnc);

function addFnc() {
    let inputs = document.getElementsByTagName('input');
    let sname = inputs[0].value;

    let li = document.createElement('li');
    let text = document.createTextNode(sname);
    li.appendChild(text);

    document.getElementsByTagName('ul')[0].appendChild(li);
}
// 클릭했을때 function 실행
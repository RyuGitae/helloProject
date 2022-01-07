// dom4.js

const titles = ['이름', '학생번호', '점수'];

const students = [{
    fullName: '류지희',
    studNo: '1001',
    score: 80
}, {
    fullName: '차주연',
    studNo: '1002',
    score: 85
}, {
    fullName: '전호민',
    studNo: '1003',
    score: 83
}];

let parent = document.getElementById("show");

// table > thead > tbody

let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);


// <thead></thead>
let thd = document.createElement('thead');
let tr = document.createElement('tr');
thd.appendChild(tr);
titles.forEach(function (title) {
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
});

//버튼.
let th = document.createElement('th');
let text = document.createTextNode('삭제');
th.appendChild(text);
tr.appendChild(th);
tbl.appendChild(thd);

// <tbody></tbody>

let tbd = document.createElement('tbody');
students.forEach(function (obj) {
    let tr = document.createElement('tr');
    // 배경색 변경.
    tr.onmouseover = function(e) {
        e.target.parentNode.style.backgroundColor = 'yellow';
    }
    // 기본색상으로 변경.
    tr.onmouseout = function(e) {
        e.target.parentNode.style.backgroundColor = null;
    }
    // // <td>이름</td>
    // let td = document.createElement('td');
    // let text = document.createTextNode(obj.fullName);
    // td.appendChild(text);
    // tr.appendChild(td);
    // // <td>학생번호</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.studNo);
    // td.appendChild(text);
    // tr.appendChild(td);
    // // <td>점수</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.score);
    // td.appendChild(text);
    // tr.appendChild(td);

    // field 갯수만큼 반복해서 생성.
    for (let field in obj) {
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    // 삭제버튼.
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = function(e) {
        // console.log(e);
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    td.appendChild(btn);
    tr.appendChild(td);
    
    tbd.appendChild(tr);
})
tbl.appendChild(tbd);


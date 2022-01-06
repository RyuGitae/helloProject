// event1.js

let str = `<table border="1">
<thead>
    <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>삭제</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>홍길동</td> <!-- on으로 시작하는 단어는 이벤트와 관련-->
        <td>053-1234-5678</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>박기현</td>
        <td>053-5643-1232</td>
        <td>대구 중구 200번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>홍민규</td>
        <td>053-2125-5432</td>
        <td>대구 중구 300번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>
</table>`;

document.write(str);

let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)'); //선택자
console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i].onclick = function (e) {
        console.log(e.target.innerText); // e.target은 이벤트가 발생하는 태그 
        let text = e.target.innerText;
        alert(text + '입니다!');
    }
}

let rows = document.querySelectorAll('tbody>tr');
for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function (e) {
        console.log(e.target.parentNode); // parentNode 부모의 노드요소
        e.target.parentNode.style.backgroundColor = 'yellow';
        // e.target.parentNode.style.display= 'none';
    }
    // <div style='background-color: yellow display: none';></div>

    rows[i].onmouseout = function (e) {
        // console.log(e.target.parentNode);
        e.target.parentNode.style.backgroundColor = null;
    }
}

// let btns = '';
let btns = document.querySelectorAll('tbody>tr>td>button');
for (let i = 0; i < btns.length; i++) {
    // btns[i].onclick = deleteFnc;
    btns[i].addEventListener('click', deleteFnc);
}

function deleteFnc(e) {
    e.target.parentNode.parentNode.remove();
}
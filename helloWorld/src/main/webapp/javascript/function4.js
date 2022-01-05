// function4.js

var students = [{
    studentName: '홍길동',
    score: 80,
    birth: '2001-05-01',
    phone: '010-1212-5623',
    gender: '남자'
}, {
    studentName: '김민수',
    score: 90,
    birth: '1999-11-03',
    phone: '010-1212-5193',
    gender: '여자'
}, {
    studentName: '박이현',
    score: 85,
    birth: '1995-04-23',
    phone: `010-1212-5343`,
    gender: '남자'
}];

function makeTable(ary) {
    var str = '';
    str += `<table border='1'>`;
    str += `<thead><tr><th>이름</th><th>점수</th><th>생년월일</th><th>연락처</th><th>성별</th></tr></thead>`;
    str += `<tbody>`;
    for(var student of ary) {
        str +='<tr>';
        // td생성.
        for(var field in student) {
            str += `<td>${student[field]}</td>`;
        }
        // str += `<td>${student.studentName}</td>`;
        // str += `<td>${student.score}</td>`;
        // str += `<td>${student.birth}</td>`;
        // str += `<td>${student.phone}</td>`;
        str +='</tr>';
    }
    str += `</tbody>`;
    str += `</table>`;
    return str;
}

// document.write(makeTable(students));
makeCal(2022, 5);
makeCal(2022, 6);
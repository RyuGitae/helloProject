// function1.js

function addNumber(n1, n2) {
    var sum = n1 + n2;
    console.log(`합계는 ${sum}`);
}

addNumber(25, 10); // 함수 호출.

function showNumber(yourName, yourScore) {
    document.write(`<p>이름: ${yourName}, 점수: ${yourScore}</p>`);
}
showNumber('홍길동', 80);

var yourName = '최경식';
var yourScore = 88;

showNumber(yourName, yourScore);

function showInfo(yourName, birthYear) {
    var today = new Date();
    // today.getFullYear();
    var thisYear = today.getFullYear();
    var age = thisYear - birthYear;
    // document.write(`<p>${yourName}은 올해 ${today.getFullYear()-birthYear+1}살입니다.</p>`);
    document.write(`<p>${yourName}은 올해 ${age}살입니다.</p>`);
}

var students = [{
    studentName: '홍길동',
    score: 80,
    birth: 2001
}, {
    studentName: '김민수',
    score: 90,
    birth: 1999
}, {
    studentName: '박이현',
    score: 85,
    birth: 1995
}];

for (var student of students) {
    showNumber(student.studentName, student.score);
}

for (var student of students) {
    showInfo(student.studentName, student.birth);
}
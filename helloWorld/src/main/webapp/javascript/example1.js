// example1.js

// <li>1001 - 류지희 - 80</li>
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

document.write('<ul>');

for (let i = 0; i < students.length; i++) {
    document.write(`<li>${students[i].studNo} - ${students[i].fullName} - ${students[i].score}</li>`);
}

document.write('</ul>');

students.push({
    fullName: '홍정우',
    studNo: 1004,
    score: 88
});

students.unshift({
    fullName: '고권영',
    studNo: 1005,
    score: 90
});

students.pop(); // 끝 배열 값 제거
students.shift(); // 앞 배열 값 제거

document.write('<ul>');
// students.forEach(function (item, idx) {
//     document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
// });
students.forEach(liFnc); // callback function
document.write('</ul>');

function liFnc(item) {
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}

const numAry = [1, 2, 3];
// numAry[3] = 4;
// numAry[numAry.length] = 10;
// numAry[numAry.length] = 20;
// console.log(numAry);

numAry.push(4); // push는 요소의 끝에 추가 
numAry.push(10);
numAry.unshift(40); // unshift는 요소의 앞에 추가
console.log(numAry);
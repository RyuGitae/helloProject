// control.js
var num = prompt('점수를 입력하세요: ');
var grade = 'F';
if (num >= 90 && num <= 100) {
    if (num > 94) {
        grade = 'A+';
    } else {
        grade = 'A';
    } // 90~94: A, 95~ :A+
} else if (num >= 80 && num < 90) {
    if (num > 84) {
        grade = 'B+';
    } else {
        grade = 'B';
    } // 80~84: B, 85~89 :B+
} else if (num >= 70 && num < 80) {
    if (num > 74) {
        grade = 'C+';
    } else {
        grade = 'C';
    }
} else if (num >= 60 && num < 70) {
    if (num > 64) {
        grade = 'D+';
    } else {
        grade = 'D';
    }
}
// num = parseInt(num / 10); // 95/10=9.5
// switch (num) {
//     case 9:
//         grade = 'A';
//         break;
//     case 8:
//         grade = 'B';
//         break;
//     case 7:
//         grade = 'C';
//         break;
//     case 6:
//         grade = 'D';
//         break;
//     default:
//         grade = 'F';
// }

document.write(`점수는 : ${num}이고 등급은 ${grade} 입니다.`);
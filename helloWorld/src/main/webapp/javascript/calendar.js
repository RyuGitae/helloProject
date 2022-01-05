// calendar.js

// var today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// //Month는 1부터 시작이 아니라 0부터 시작 
// console.log(today.getMonth());
// console.log(today.getDate());
// //Day는 Sunday 0부터 Saturday 6까지
// console.log(today.getDay());

// //new Date (x, x, 0)에서 0은 달의 마지막 일
// var otherDay = new Date(2021, 6, 0);
// console.log(otherDay);
// console.log(otherDay.getFullYear());
// console.log(otherDay.getMonth());
// console.log(otherDay.getDate());
// console.log(otherDay.getDay());

// var today = new Date(2022, 0, 1);
// document.write(`<h3>${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`);

// var lastDay = new Date(2022, 1, 0); //1월의 말일 
// document.write(lastDay.getDate());
// // document.write(today.getDay())
// for (var n = 0; n<3; n++) {
//     document.write('<span> </span>');
// }
// for (var i = 1; i <= 30; i++) {
//     document.write('<span>' + i + '</span>');
//     if ((i+3) % 7 == 0) {
//         document.write('<br>');
//     }
// }

var firstDay = new Date(2022, 0, 1); //1월 1일
// document.write(firstDay.getDay());
var lastDay = new Date(2022, 1, 0); //1월 말일
// document.write(lastDay.getDate());

var year = 2022;
var month = 5;

function makeCal(year, month) {

    var calendarF = new Date(year, month - 1, 1);
    var calendarL = new Date(year, month, 0);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    document.write(`<h3>${calendarF.getFullYear()}년 ${calendarL.getMonth()+1}월</h3>`);

    // 배열을 활용해서 요일정보 출력.
    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }
    // document.write('<span>일</span>');
    // document.write('<span>월</span>');
    // document.write('<span>화</span>');
    // document.write('<span>수</span>');
    // document.write('<span>목</span>');
    // document.write('<span>금</span>');
    // document.write('<span>토</span>');

    // 빈 공란 출력.
    document.write('<br>');

    // 날짜 출력.
    for (var n = 0; n < calendarF.getDay(); n++) {
        document.write('<span></span>');
    }

    for (var i = 1; i <= calendarL.getDate(); i++) {
        if ((i + calendarF.getDay()) % 7 == 1) {
            document.write('<span class="sunday">' + i + '</span>');
        } else if ((i + calendarF.getDay()) % 7 == 0) {
            document.write('<span class="saturday">' + i + '</span>');
        } else {
            document.write('<span>' + i + '</span>');
        }
        if ((i + calendarF.getDay()) % 7 == 0) {
            document.write('<br>');
        }
    }
}
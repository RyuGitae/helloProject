// operator.js
// var iVal = window.prompt("값을 입력");
var iVal = 0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];

var sum = 0;
for (var num of numAry) {
    console.log(num);
    if (num % 2 == 0) {
        sum += num;
    }
    if (num === parseInt(iVal)) { // ===는 타입비교로  num 타입의 8 iVal string타입의 8
        break;
    }
}

console.log(`합계는 ${sum}`);

console.log(3 + '5' + (3 + 4))

var sum_2 = 0;
var sum_3 = 0;
var sum_23 = 0;
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0 && i % 6 != 0) {
        sum_2 += i;
    } else if (i % 3 == 0 && i % 6 != 0) {
        sum_3 += i;
    } else if (i % 6 == 0) {
        sum_23 += i;
    }
}

console.log(`2의 배수 합계: ${sum_2}`);
console.log(`3의 배수 합계: ${sum_3}`);
console.log(`2와 3의 배수 합계: ${sum_23}`);
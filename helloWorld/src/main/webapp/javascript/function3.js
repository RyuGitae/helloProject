// function3.js

function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값: ${result}`);

function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(getMax(30, 40));

function getMaxVal(ary) {
    var maxVal = Number.MIN_SAFE_INTEGER;
    // var maxVal = 0;
    for (var i = 0; i < ary.length; i++) {
        // ary 배열의 값중에서 제일 큰값 반환.
        // maxVal = getMax(ary[i], maxVal);
        if (maxVal < ary[i]) {
            maxVal = ary[i];
        } 
        // else if (maxVal > ary[i]) { // 굳이 비교할 필요 없음
        //  maxVal;
        // }
    }
    return maxVal;
}

function getMinVal(ary) {
    var minVal = Number.MAX_SAFE_INTEGER;
    // ary 배열의 값중에서 제일 작은값 반환.
    // var minVal = ary[0];
    
    for (var i = 0; i < ary.length; i++) {
        if (minVal > ary[i]) {
            minVal = ary[i];
        }
    }
    return minVal;
}



var numAry = [34, -20, 15, 8, 10, -55];
console.log(`최대값: ${getMaxVal(numAry)}`);
console.log(`최소값: ${getMinVal(numAry)}`);
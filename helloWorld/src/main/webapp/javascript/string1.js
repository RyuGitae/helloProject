// string1.js

var val = 'hello';
val = new String('hello,world');
// console.log(typeof val);
console.log(val.substring(2, 3));

var h3Tag = document.querySelector('h3');
var text = h3Tag.innerHTML;
var str = text.substring(2, 10);
str = text.slice(1, 5);
// str = val.substring(0,2);
// console.log(h3Tag.innerHTML);
var elem = document.getElementById('show');
// elem.innerHTML = '<h3>Hello</h3>';
elem.innerText = str;
console.log(elem);

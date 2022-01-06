// example2.js

let datas = `[{"id":1,"first_name":"Lynn","last_name":"Flecknell","email":"lflecknell0@usda.gov","gender":"Male"},
{"id":2,"first_name":"Bernhard","last_name":"Wildbore","email":"bwildbore1@slate.com","gender":"Male"},
{"id":3,"first_name":"Marietta","last_name":"Ledgerton","email":"mledgerton2@com.com","gender":"Female"},
{"id":4,"first_name":"Ingamar","last_name":"Magovern","email":"imagovern3@vkontakte.ru","gender":"Male"},
{"id":5,"first_name":"Angelica","last_name":"Kainz","email":"akainz4@altervista.org","gender":"Female"},
{"id":6,"first_name":"Darelle","last_name":"Nugent","email":"dnugent5@sfgate.com","gender":"Male"},
{"id":7,"first_name":"Flossy","last_name":"Hay","email":"fhay6@github.com","gender":"Female"},
{"id":8,"first_name":"Deb","last_name":"Glass","email":"dglass7@businesswire.com","gender":"Female"},
{"id":9,"first_name":"Olive","last_name":"Dugget","email":"odugget8@fda.gov","gender":"Male"},
{"id":10,"first_name":"Noby","last_name":"Rycraft","email":"nrycraft9@tumblr.com","gender":"Male"},
{"id":11,"first_name":"Skippie","last_name":"Hildred","email":"shildreda@disqus.com","gender":"Male"},
{"id":12,"first_name":"Thornie","last_name":"Wilkie","email":"twilkieb@purevolume.com","gender":"Female"},
{"id":13,"first_name":"Ginevra","last_name":"Petrolli","email":"gpetrollic@ocn.ne.jp","gender":"Female"},
{"id":14,"first_name":"Enrika","last_name":"Maylott","email":"emaylottd@163.com","gender":"Female"},
{"id":15,"first_name":"Ghost","last_name":"King","email":"gbrune@google.pl","gender":"Male"}]`;

let employees = JSON.parse(datas);
// console.log(employees);

// employees.forEach(function (item, ind) {

// });

document.write(`<table border="1">`);
document.write(`<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr></thead>`);
document.write(`<tbody>`);
employees.forEach((item, ind) => {
    document.write(`<tr>`);
    document.write(`<td>${item.id}</td><td>${item.first_name} ${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td>`);
    document.write(`</tr>`);
    console.log(item.id, item.first_name, item['last_name'], item['gender']);
});
document.write(`</tbody>`);
document.write(`</table>`);

let firstNames = [];

// employees => 배열값 중 first_name => 
employees.forEach(function(item, ind) {
    // 배열.push(값);
    firstNames.push(item.first_name);
});
console.log(firstNames);
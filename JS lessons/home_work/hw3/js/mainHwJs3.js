// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// 1) Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

let contentId = document.getElementById("content");
console.log(contentId.innerText);

// b) отримує текст з блоку з id "rules"

let rulesId = document.getElementById('rules');
console.log(rulesId.innerText);

// c) замініть текст параграфа з id 'content' на будь-який інший

contentId.innerText = 'PIU PIU';
console.log(contentId.innerText);

// d) замініть текст параграфа з id 'rules' на будь-який інший

rulesId.innerText = 'тут мав би бути текст';
console.log(rulesId.innerText);

// e) змініть кожному елементу колір фону на червоний

// let allElements = document.getElementsByTagName('body');
// for (let i = 0; i < allElements.length; i++) {
//     const allElementBody = allElements[i];
//     console.log(allElementBody);
//     allElementBody.style.backgroundColor = 'red'
//
// }

// f) змініть кожному елементу колір тексту на синій

// for (let i = 0; i < allElements.length; i++) {
//     const allElementBodyTxt = allElements[i];
//     allElementBodyTxt.style.color = 'blue';
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rulesId.classList);

// h) отримати всі елементи з класом fc_rules

let fs_rulesAll = document.getElementsByTagName('Li');
// console.log(fs_rulesAll);

for (let i = 0; i < fs_rulesAll.length; i++) {
    // console.log(fs_rulesAll[i].classList);
}

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fs_rulesAll.length; i++) {
    fs_rulesAll[i].style.color = "red";
    console.log(fs_rulesAll[i].classList);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Cairo',
        country: 'Egypt',
        street: 'Seashore',
        houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement.
// Вставити цей блок на сторінку

// for (let i = 0; i < users.length; i++) {
//     const userArr = document.createElement('div');
//     // console.log(userArr);
//
//     userArr.innerHTML = `
//     Hello my name is ${users[i].name} <br>
//     I am ${users[i].age} years old`;
//
//     document.body.appendChild(userArr);
// }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement.Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     const userArr = document.createElement('div');
// //
// //     console.log(userArr);
// //
// //     userArr.style.margin = '20px';
// //     userArr.style.backgroundColor = 'silver'
// //
//     userArr.innerHTML = `
//     Hello my name is ${users[i].name} <br>
//     I am ${users[i].age} years old`;
// //
//     document.body.appendChild(userArr);
// //
// }
//
// for (const user of users) {
//     console.log(user);
//
//     console.log(user.address.city)
//     let e = user.address
//    e = document.createElement('h1');
//     user.address.innerText = `${user.address}`
//     document.body.appendChild(e)
// }
//  ++++++++тут пока не разобрался


















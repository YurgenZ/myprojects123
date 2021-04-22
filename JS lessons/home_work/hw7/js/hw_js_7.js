// //      - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на
// //      кнопку зникавл елемент с id="text".
//
// let idText = document.createElement('p');
// idText.setAttribute('id', 'text');
// idText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque qui sed vitae!'
// document.body.appendChild(idText);
// console.log(idText);
//
// //      - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// let button = document.createElement('button');
// button.setAttribute('id', 'PIU')
// button.innerText = 'if you click I ...';
// button.onclick = () => {
//     button.style.display = 'none'
//     // document.body.removeChild(button)
// }
//
// document.body.appendChild(button);
// console.log(button);
// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //
// // const inputEl = document.createElement('input');
// // const buttonOk = document.createElement('button');
// // buttonOk.innerText = 'confirm'
// // document.body.appendChild(inputEl);
// // document.body.appendChild(buttonOk);
// //
// // inputEl.value = 'enter age: ';
// // inputEl.oninput = (ev,) => {
// //     buttonOk.onclick = () => {
// //         console.log(inputEl.value)
// //     }
// //
// // }
// // console.log(inputEl.oninput);
//
// //При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це
// // користувача
//
//
// const inputEl = document.createElement('input');
// const buttonOk = document.createElement('button');
//
// buttonOk.innerText = 'confirm';
// document.body.appendChild(inputEl);
// document.body.appendChild(buttonOk);
//
// inputEl.oninput
// console.log(inputEl.oninput);
// buttonOk.onclick = () => {
//     inputEl.value < 17 || typeof inputEl.value != 'number' ? console.log(`NO!!! GO AWAY!!!!!!`) : console.log(`welcome to site`);
//     console.log(typeof inputEl.value === 'number');
// }
// console.log(inputEl.oninput);
// //??????????????????????????????????????????????????????????????????????????????????????????????????
//
// //- Створіть меню, яке розгортається/згортається при клику
//
// let menu = document.querySelector('#nav_menu');
// let list = document.querySelector('#list')
// menu.style.backgroundColor = 'red';
// menu.style.width = 'fit-content';
//
// menu.onclick = () => {
//     menu.onclick ? (list.style.display = 'none') : (list.style.display = 'block');
//     menu = !menu;
//     console.log(menu);
// }
//
//      - Створіть список коментарів , приклад об'єкту коментаря -
// приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let comments = [
    {
        name: 'olga - ', address: 'Kyiv, Gongadze, 16'
    },
    {
        name: 'vasia - ', address: 'Rivne, Zelena, 1'
    },
    {
        name: 'sasha - ', address: 'Lviv, Pasichna, 121}'
    },
    {
        name: 'lena - ', address: 'Rivne, Shevchenko, 90'
    },
    {
        name: 'vita - ', address: 'Rivne, Ivana Franka, 121'
    }];
console.log(comments);
//Вивести список коментарів в документ, кожний в своєму блоці.

// let elementComm = document.querySelector('#list_comm');
comments.forEach(item => {
    let p = document.createElement('p');
    p.innerText = item.name + item.address;
    document.body.appendChild(p);
})

//     Додайте кожному коментарю по кнопці для згортання його body.
let pes = document.querySelectorAll('p');
pes.forEach(item => {
    item.setAttribute('class', 'comment')
})

pes.forEach(item => {
    let btn = document.createElement("button");
    btn.onclick = () => {
        item.style.display = 'none';
    }
    btn.innerText = 'less';
    item.appendChild(btn);
})


//      - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на
//      консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const form1 = document.forms.form1;
const form2 = document.forms.form2;

const btn1 = document.getElementById('btn1');
btn1.innerText = 'push me'


btn1.onclick = () => {
    for (const item of form1) {
        console.log(item.value);
    }
    for (const item2 of form2) {
        console.log(item2.value);
    }
}


//      - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function addTable(string, columns, addToTag) {
    let tableCreate = document.createElement('table');
    let addTo = document.getElementById(addToTag);
    for (let i = 0; i < string; i++) {
        let str = document.createElement('tr');
        for (let k = 0; k < columns; k++) {
            let coll = document.createElement('td');
            str.appendChild(coll)
        }

        tableCreate.appendChild(str)
    }

    addTo.appendChild(tableCreate);
}

addTable(2, 4, 'nav_menu');


//      - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

const imgPrev = document.querySelector('#itemCarousel');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

btnNext.innerText = 'next';
const imgArr = [
    {url: './img/1.jfif'},
    {url: './img/2.jfif'},
    {url: './img/3.jfif'},
    {url: './img/4.jfif'}
]
let i = 0;
imgPrev.src = imgArr[i].url
btnNext.onclick = () => {

    i === imgArr.length - 1 ? i = 0 : i++
    imgPrev.src = imgArr[i].url

    console.log(imgArr.length);
    console.log('-----------------------------')
    console.log(i);
}
btnPrev.innerText = 'prev';
btnPrev.onclick = () => {

    i <= 0 ? i = imgArr.length - 1 : i--
    imgPrev.src = imgArr[i].url

    console.log(imgArr.length);
    console.log('-----------------------------')
    console.log(i);
}
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let textArr = ['козел', 'блин', 'говно', 'черт', 'дибил'];
let textInp = document.querySelector('#textInp');
let confirmBtn = document.querySelector('#confirmBtn');

confirmBtn.onclick = () => {
    for (const string of textArr) {
        textInp.value === string ? alert('АЯЯЯЙ!!!') : '';
    }
}

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let textInp2 = document.querySelector('#textInp2');
let confirmBtn2 = document.querySelector('#confirmBtn2');

confirmBtn2.onclick = () =>{
    for (const str of textArr) {
        console.log(textInp2.value);
        textArr.value.filter(item => {
            textInp2.value = str ;
        })
        // textInp2.value.

    }
}

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх
// заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті


// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву.
// Фільтри можуть працювати як разом
// так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let checkBtn = document.getElementById('checkBtn');
let filterFalse = document.querySelector('#check1');
let ageOver = document.querySelector('#check2');
let isKyiv = document.querySelector('#check3');

let notMarried = usersWithAddress.filter(item => item.isMarried === false);
let age = usersWithAddress.filter(item => item.age > 28);
let city = usersWithAddress.filter(item => item.address.city === 'Kyiv')

checkBtn.onclick = () => {
    filterFalse.checked ? console.log(notMarried) : '';
    ageOver.checked ? console.log(age) : '';
    isKyiv.checked ? console.log(city) : '';
}










// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

let h1Style = document.getElementById('main_header');
    h1Style.style.color = '#bcecef'
    h1Style.innerText = 'FEB-2021'

// b) робить шириниу елементу ul 400px

let ulWeight = document.body.getElementsByTagName('ul');
    ulWeight[0].style.width = '400px';
    // console.log(ulWeight);

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsWidth = document.body.getElementsByClassName('linkList');
for (let i = 0; i < elementsWidth.length; i++) {
    const elementsWidthElement = elementsWidth[i];
    elementsWidthElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

// console.log(ulWeight[1].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElements = document.body.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let anchorElements = document.body.getElementsByTagName('a');
for (const anchorElement of anchorElements) {

    anchorElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElements = document.body.getElementsByTagName('a');
for (const aElement of aElements) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aTextElements = document.body.getElementsByTagName('a');
for (const aTextElement of aTextElements) {

    let textValue = aTextElement.innerText;

    aTextElement.classList.add(`element_${textValue}`);

    console.log(aTextElement);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeadersBack = document.body.getElementsByClassName('sub-header');
// for (const subHeaderBackElement of subHeadersBack) {
//     subHeaderBackElement.style.backgroundColor = prompt('');
// }

// let colorBase =
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colorBase = document.body.getElementsByClassName('sub-header');
// for (const colorBaseElement of colorBase) {
//
//     if (colorBaseElement.innerText === 'content 2 segment') {
//         colorBaseElement.style.color = prompt('');
//         console.log(colorBaseElement.style)
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// colorBase = document.body.getElementsByClassName('content_1');
// for (const colorBaseElement of colorBase) {
//     colorBaseElement.innerText = prompt('');
// }

// l) отримати елементи p та змінити їм padding на 20px

let pItems = document.body.getElementsByTagName('p');
for (const pItem of pItems) {
    pItem.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (let rule of rules) {

    let rule = document.createElement('div');

    rule.classList.add('class_rules');
    document.body.appendChild(rule);

    let headersCreate = document.createElement('h2');
        headersCreate.classList.add('headers');
        rule.appendChild(headersCreate);

    let paragraphsCreate = document.createElement('p');
        paragraphsCreate.classList.add('text_rules');
        rule.appendChild(paragraphsCreate);



        headersCreate.innerText = 'LOREM';
        paragraphsCreate.innerHTML = `lorem`;

}

    // rule.innerHTML  = `
    // <h1>${rule.title}</h1> <p>${rule.body}</p>

// ???????????????????????? треба якось запхать значення


//
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersArr = [];
//
// for (const citiesWithIdElement of citiesWithId) {
//     // console.log(citiesWithIdElement);
//     for (const usersWithIdElement of usersWithId) {
//         if (usersWithIdElement.id === citiesWithIdElement.user_id) {
//             usersArr.push(usersWithIdElement );
//             usersArr.push(citiesWithIdElement);
//         }
//     }
//
//
// }
// for (const usersArrElement of usersArr) {
//
// console.log(usersArrElement);
// }





// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

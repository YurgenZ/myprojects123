// 1) створити функцію яка приймає масив та виводить його
// let arr = [1, 23, 5, 6, 8, 'sfd', 77];
// function getResult(arrayInput) {
//     console.log(arrayInput);
// }
//
// let a = getResult(arr);
// console.log(a);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randomNums() {
//     let arrRandom = [0];
//     for (let i = 0; i < 10; i++) {
//         let r = parseInt(Math.random() * 100);
//         arrRandom.push(r);
//     }
//     return arrRandom;
// }
// getResult(randomNums());

//+++

// let arrRandomNum = [];
//
// for (let i = 0; i < 10; i++) {
//     let r = parseInt(Math.random() * 100);
//     arrRandomNum.push(r);
// }
// console.log(arrRandomNum);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
//
// }
//
// minNum(1, 2, 3);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
//
// }
//
// maxNum(1, 2, 3);

// 5) створити функцію яка повертає найбільше число з масиву

// let arrNums = [1, 23, 5, 6, 8, 'sfd', 77];
//
// function maxArrNum(enter_arr = []) {
//     let max = enter_arr[0];
//
//     for (let i = 1; i < enter_arr.length; i++) {
//         if (enter_arr[i] > max) {
//             max = enter_arr[i];
//         }
//     }
//     return max
// }
//
// let maxNums = maxArrNum(arrNums);
// console.log(maxNums);

// 6) створити функцію яка повертає найменьше число з масиву


//  let arrNums = [1, 23, 5, 6, 8,-8, 'sfd', 77];
//
// function minArrNum(enter_arr = []) {
//     let min = enter_arr[0];
//     let length = enter_arr.length
//     for (let i = 0; i <= length; i++) {
//         if (enter_arr[i] < min) {
//             min = enter_arr[i]
//         }
//     }
//     return min;
// }
// let minArrNums = minArrNum(arrNums);
// console.log(minArrNums);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

//  let arrNums = [1, 23, 5, 6, 8,-8,  77];
//
// function sumSomeNums(enter_value = []) {
//     let arrNum = enter_value;
//
//     let sumElements = 0
//     for (const arrNumElement of arrNum) {
//         sumElements = arrNum.reduce((a, b) => a + b, 0)
//     }
//     return sumElements
// }
//
// let sumElement = sumSomeNums(arrNums)
// console.log(sumElement);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1, 4, 3, 4];
//
// function arrMean(enter_value = []) {
//     let arrNum = enter_value;
//
//     let mean = 0
//     for (const arrNumElement of arrNum) {
//         mean = arrNum.reduce((a, b) => (a + b), 0);
//     }
//     return mean / arrNum.length
// }
//
// let arrMeans = arrMean(arr);
// console.log(arrMeans);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'},
//     {name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function returnKey(enter_array = 0) {
//     let arrAll = [];
//     for (const arrElement of enter_array) {
//         arrAll.push(Object.keys(arrElement));
//     }
//     return arrAll.flat();
// }
//
// let logger = returnKey(arrOfObj);
// console.log(logger);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arrOfValues = [{name: 'Dima', age: 13}, {model: 'Camry'},
//     {name: 'ivan', age: 13}, {model: 'zaz'}];
//
// function arrValue(enter_array = []) {
//     let arrAll = [];
//     for (const arrElement of enter_array) {
//         arrAll.push(Object.values(arrElement));
//     }
//     return arrAll.flat();
// }
//
// let logger = arrValue(arrOfValues);
// console.log(logger);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
//
//

let arrOfNums1 = [1, 2, 3, 4];
let arrOfNums2 = [4, 3, 2, 1];

function sumSomeElements(arr1, arr2) {
    let sum = [];
    for (const arr1Element of arr1) {
        for (const arr2Element of arr2) {
            if (arr1Element === arr2Element)
                sum.push(arr1(arr1Element) + arr2(arr2Element));
            console.log(arr2Element);
        }
    }
    return sum
}

let sum = sumSomeElements(arrOfNums1, arrOfNums2);
console.log(sum);
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
// function stylezator(enter = ['not input']) {
//     let user = enter;
//     user = user.trim();
//
//     let u = user.indexOf(' ');
//     console.log(u);
//     user = user.replaceAll(' ', '');
//
//     let strings = user.split(' ');
//     console.log(strings);
//     // console.log(s);
// }
//
// stylezator('    Hermione       Granger      ');

// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function inputTextBlock() {
//     let textDiv = document.createElement('div');
//     textDiv.innerText = 'Hello owu';
//     document.body.appendChild(textDiv);
// }
//
// inputTextBlock()
//
// // - Додає в боді елемент з текстом. Тип елементу та текст отримати через аргументи
//
// function inputTextElement(enter_str) {
//     let elementCreate = document.createElement("p");
//     elementCreate.innerText = (enter_str);
//     document.body.appendChild(elementCreate);
// }
//
// inputTextElement('PIU PIU');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який
// потрібно додати список цих автомобілів.

// function input

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.


// Для кожної властивості створити всередені блока автомоблія свій блок


// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
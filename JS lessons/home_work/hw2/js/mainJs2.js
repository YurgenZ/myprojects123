// 1--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let numbers = [15, 22, 87, 1, 0];
// console.log(numbers);
//
// let str = ['let', 'learn', 'massive', 'and', 'cycles'];
// console.log(str);
//
// let mix = ['string', 454, 2, false, true];
// console.log(mix);


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let example = [];
// console.log(example);
// for (let i = 0; i < 12; i++) {
//     const example = [i];
//     console.log(example);
// }

//      - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> hello world  </div>`);
// }


//      - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>some text ${i} </div>`);
// }


//      - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let str = 0;
// while (str < 20) {
//     document.write(`<h1>some text</h1>`);
//     str++;
// }


//      - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let headers = 0;
// while (headers < 20) {
//     document.write(`<h1>Piu Piu ${headers}</h1>`);
//     headers++;
// }


//      - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// debugger
// let numbers = [10, 1, 88, 99, 7777, 54, 28, 656, 666, 2];
// for (let i = 0; i < numbers.length;i++) {
//     console.log(numbers[i]);
// }


//      - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['let', 'learn', 'massive', 'and', 'cycles', '.', 'hello', 'school', 'time', 'javaScr'];
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


//      - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mix = ['string', 123, 'iteration', false, 1231, 0, 'coffee', true, 7, 'red'];
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);
// }


//      - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let exampleMix = [1, 324, false, 'string', 'length', 'header', 'typeof', true, 89, 128];
// for (let i = 0; i < exampleMix.length; i++) {
//     if (typeof exampleMix[i] === 'boolean') {
//         console.log(exampleMix[i]);
//     }
// }


//      - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (j = 0; j < exampleMix.length; j++) {
//     if (typeof exampleMix[j] === 'number') {
//         console.log(exampleMix[j]);
//     }
// }


//      - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (i = 0; i < exampleMix.length; i++) {
//     (typeof exampleMix[i] === 'string')
//     ?console.log(exampleMix[i])
//         :"";
// }


//      - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//      Вивести в консоль всі його елементи в циклі.
// let empty = [];
//
// empty[3] =128;
// empty[2] ='typeof';
// empty[4] =89;
// empty[5] =true;
// empty[6] ='header';
// empty[9] ='length';
// empty[8] ='string';
// empty[7] =false;
// empty[1] =324;
// empty[0] =1;
//
// for (let i=0;i<empty.length;i++) {
//     console.log(empty[i])
// }

//      - Створити цикл for на 10  ітерацій з кроком 1.
//      Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//     document.write(`${i} <br>`);
// }


//      - Створити цикл for на 100 ітерацій з кроком 1.
//      Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`);
//     document.write(`${i} <br>`);
// }


//      - Створити цикл for на 100 ітерацій з кроком 2.
//      Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(`${i}`);
//     document.write(`${i} <br>`);
// }


//      - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write



//      - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//      - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//      - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//      - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)






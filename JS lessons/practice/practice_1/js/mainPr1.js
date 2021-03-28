// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = ('Привет');   string
// let num = (123);        number
// let flag = (true);      boolean
// let txt = ('true');     string
// console.log(typeof str, num, flag, txt);


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = (5 + 3);   console.log(a1);     a1 = (8);
// let a2 = (5 - 3);   console.log(a2);     a2 = (2);
// let a3 = (5 * 3);   console.log(a3);     a3 = (15);
// let a4 = (5 / 3);   console.log(a4);     a4 = (1.6666666666666667);
// let a5 = (5 % 3);   console.log(a5);     a5 = (2);
//


//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 =  (5 % 3);          console.log(a6);       a6 = (2);
// let a7 =  (3 % 5);          console.log(a7);       a7 = (3);
// let a8 =  (5 + '3');        console.log(a8);       a8 = (53);
// let a9 =  ('5' - 3);        console.log(a9);       a9 = (2);
// let a10 = (75 + 'кг');      console.log(a10);      a10 = ('75кг');


//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = ('23см');
// let width = ('10см');
// let number1 =parseInt(height);
// let number2 = parseInt(width);
// let s =(number1*number2);
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

// let heightC = ('10м');
// let dC = ('4м');
// let numberHeightC = parseInt(heightC);
// let number_dC = parseInt(dC);
// const PI = 3.14;
// let v = (PI * number_dC * numberHeightC);
// console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора
//   (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


// 7. Напишите скрипт, который выводит "Hello world",
// создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = ('Hello world');
// document.write(str);
// alert(str);
// console.log(str);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = ('Sinyuk Yurii Oleksandrovich');
// let age = (28);
// let hobby = ('some painting');
// alert(name + '\n' + age + '\n' + '\n' + hobby);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = ('Кто');
// let str2 = (' ты');
// let str3 = (' такой');
// let concatenation = (str1+str2+str3);
// document.write(concatenation);


//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//      let str = "20";
//       let a = 5;
//       document.write(str + a + "<br/>");         205
//       document.write(str - a + "<br/>");         15
//       document.write(str * "2" + "<br/>");       40
//       document.write(str / 2 + "<br/>");         10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

// parseInt("3.14");        3
// parseInt("-7.875");     -7
// parseInt("435");        435
// parseInt("Вася");       NaN


//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);


// let str = prompt("Enter something", "ho-ho")
// console.log(str);


//13. С помощью окна ввода, вызываемого методом prompt,
// сделать сложение двух чисел, а вывод результата при помощи метода alert

// let str = parseInt(prompt('сложение двух чисел','3+5'));
// alert(str);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Введить Ваше им_я');
// let surname = prompt('Введить Ваше прізвище');
// let age = prompt('Введить Ваш вік');
// alert("Доброго вечора, "+name+' '+surname+' мої вітання, Вам '+age+' років');


// =====================
// ======ДОП============
// =====================


// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let number1 = prompt();
// let number2 = prompt();
// let number3 = prompt();
// if (number1 > number2 && number1 > number3) {
//     if (number2 > number3) {
//         alert(number3 + number2 + number1);
//     } else {
//         alert(number2 + number3 + number1);
//     }
// }if (number2 > number1 && number2 > number3) {
//         if (number1 > number3) {
//             alert(number1 + number3 + number2);
//         }else {
//             alert(number3 + number1 + number2);
//         }
//
//     }


// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt();
//
// if (color === 'green') {
//     alert('иди!');
// }else if (color === 'yellow') {
//     alert('подожди');
// }else if (color === 'red') {
//     alert('стой');
// }else if (color === 'accident') {
//     alert('делай что хочешь')
// }

//  3.  Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


let color = prompt();
let isRoadClear = confirm()

if (color === 'green'&&isRoadClear) {
    alert('иди!');
}else if(color === 'green'&&!isRoadClear) {
    alert('подожди пока нарушители проедут');
}
else if (color === 'yellow'&& isRoadClear) {
    alert('подожди');
}else if(color === 'yellow' && !isRoadClear) {
    alert('все рано жди')
}
else if (color === 'red' && isRoadClear) {
    alert('стой');
}else if (color === 'red' && !isRoadClear) {
    alert('стой и жди');
}
else if (color === 'accident') {
    alert('делай что хочешь')
 }
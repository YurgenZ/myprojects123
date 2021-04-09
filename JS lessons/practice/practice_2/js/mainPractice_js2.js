// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arrABC = ['a','b','c'];
//
// for (let i = 1; i < 4; i++) {
//     arr.push(i)
// }    console.log(arr);
// console.log(arr[i])

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arrNum = [1,2,3];
// arrNum.reverse()
// console.log(arrNum);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arrNum = [1,2,3];
// arrNum.push(4);
// arrNum.push(5);
// arrNum.push(6);
// console.log(arrNum);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arrNum = [1,2,3];
// arrNum.unshift(6)
// arrNum.unshift(5)
// arrNum.unshift(4)
// console.log(arrNum)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arrT = ['js','css','jq'];
// console.log(arrT.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arrT = ['js','css','jq'];
// console.log(arrT.pop());

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arrNum = [1, 2, 3, 4, 5];
// arrNum.shift();
// arrNum.shift();
// arrNum.shift();
// console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let arrNum = [1, 2, 3, 4, 5];
// arrNum.pop();
// arrNum.pop();
// arrNum.pop();
// console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри

// let arrNum = [1,2,3,4,5];
//
// let shiftedNum1 = ((arrNum.shift(1)));
// let shiftedNum2 = ((arrNum.shift(2)));
// let shiftedNum3 = ((arrNum.shift(3)));
//
//     arrNum.unshift('c');
//     arrNum.unshift('b');
//     arrNum.unshift('a');
//     arrNum.unshift(shiftedNum3);
//     arrNum.unshift(shiftedNum2);
//     arrNum.unshift(shiftedNum1);
//
// arrNum.unshift()
// console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < 10; i++) {
//
//     if (i % 2 === 1) {
//         console.log(arrTen[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arrTen = [1, 2, 5, 4, 5, 6, 7, 8, 9, 10];
// let arrTenCopy = [];
//
// for (let item of arrTen) {
//
//         console.log(item)
// arrTenCopy.push(item)
// }
// console.log(arrTenCopy);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrTen = [1, 2, 5, 4, 5, 6, 7, 8, 9, 10];
// let arrTenCopy = [];
//
// for (let item of arrTen) {
//
//         console.log(item);
// arrTenCopy.unshift(item);
// }
// arrTenCopy.reverse()
// console.log(arrTenCopy);

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while

// let arrNums = [2,17,13,6,22,31,45,66,100,-18];
// // console.log(arrNums);
//
// let i = 0;
// while (i <arrNums.length){
//
//     console.log(arrNums[i]);
//     i++;
// }

//     2. перебрати його циклом for

// let arrNums1 = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let item of arrNums1) {
//     console.log(item);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом


// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(arrNums);
//
// let i = 0;
// while (i < arrNums.length) {
//
//     if (i % 2 === 0  ) {
//         console.log(arrNums[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arrNums.length; i++) {
//     if (i % 2 === 0) {
//         console.log(arrNums[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(arrNums);
//
// let i = 0;
// while (i < arrNums.length) {
//     if ((arrNums[i]) % 2 === 0) {
//         console.log(arrNums[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(arrNums);
//
// for (let i =0;i<arrNums.length;i++) {
//     if ((arrNums[i]) % 2 === 0) {
//         console.log(arrNums[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// // console.log(arrNums);
// for (let i = 0; i < arrNums.length; i++) {
//     if ((arrNums[i]) % 3 === 0 ){
//         arrNums[i] = 'okten'
//         // console.log(arrNums[i]);
//     }
// }
// console.log(arrNums);


// 8. вивести масив в зворотньому порядку.

// let arrNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(arrNums.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let pairedNums = [];
//
// for (let i = 2; i <= 100; i += 2) {
//
//     pairedNums = i
//     console.log(pairedNums);
// }


// - заповнити його 50 непарними числами за допомоги циклу.

// let pairedNums = [];
//
// for (let i = 1; i <= 100; i +=2) {
//
//     pairedNums = i
//     console.log(pairedNums);
// }

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let pairedNums = [];
//
// for (let i = 1; i <= 100; i +=2) {
//
//     pairedNums = i
//     console.log(pairedNums);
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let pairedNums = [];
//
// for (let i = 0; i <= 100; i++) {
//         if ((i%2) === 1){
//             pairedNums = i;
//     console.log(pairedNums);}
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arrRandomNum = [];
//
// while (arrRandomNum.length < 20) {
//     let randomNumber = Math.ceil(Math.random() * 100);
//     let found = false;
//     for (let i = 0; i < arrRandomNum.length; i++) {
//         if (arrRandomNum[i] === randomNumber) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         arrRandomNum[arrRandomNum.length] = randomNumber;
//     }
// }
// console.log(arrRandomNum);

//так якось зручніше

let arrRandomNums = [];

    for (let i = 0; i < 20; i++) {
        let r = parseInt(Math.random() * 100);
        arrRandomNums.push(r);
}
console.log(arrRandomNums);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arrRandomNum = [];

// for (let i = 0; i < 20; i++) {
//     let r = parseInt(Math.random() * 732);
//     if (r > 8) {
//         arrRandomNum.push(r);
//     }
// }
//     document.write(`${arrRandomNum}`+'');
//     console.log(arrRandomNum);

// 2. Вивести за допомогою console.log кожен третій елемент

let arrRandomNum = [];

for (let i = 0; i < 20; i++) {
    let r = parseInt(Math.random() * 732);
    arrRandomNum.push(r);
    if (i % 3 === 0 && i > 0){
        console.log(arrRandomNum[i])
    }
}
console.log(arrRandomNum);
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх
// в новий масив


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.





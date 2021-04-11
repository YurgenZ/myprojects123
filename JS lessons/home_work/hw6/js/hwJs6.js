// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
//     d) Відфілтрувати числа які є більшими за 10.
//     e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//     f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let arrNums = [0, 17, 1, 14, 48, 50, 97, 11, 27, 12, 35, 2, 65, 70, 38, 33, 64, 44, 93, 34];
// let sortNumUp = arrNums.sort((a, b) => {
//     return a - b;
// });
// console.log(sortNumUp);
//
// let sortNumDown = arrNums.sort((x, y) => {
//     return y - x;
// });
// console.log(sortNumDown);
//
// let arrNumFilter3 = arrNums.filter(value => {
//     return value % 3 === 0;
// });
// console.log(arrNumFilter3);
//
// let arrNumFilter = arrNums.filter(value => {
//     return value !== 10 && value > 10;
// });
// console.log(arrNumFilter);
//
// let arrNumForEach = arrNums.forEach(value => {
//     document.write(`${value} <br>`);
// })
// console.log(arrNumForEach);
//
// let arrNumMap3 = arrNums.map(value => {
//     return value * 3;
// })
// console.log(arrNumMap3);
//
// let arrNumReduce = arrNums.reduce((acc, currentValue) => {
//     return acc + currentValue;
// })
// console.log(arrNumReduce);

// 2) Створити масив з 20 стрічок та:
//      a) Відсортувати його в алфавітному порядку
//      b) Відсортувати в зворотньому порядку
//      c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//      d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let arrStr = ['vasia', 'avto', 'js', 'test', 'bober', 'olga', 'CPU', 'filter', 'map', '23232', 'console', 'iteration',
//     'america', 'java', 'true', 'NaN', 'viktoria', 'train', 'flex', 'android'];
//
// let arrStrSortUp = arrStr.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     return 1;
// })
// console.log(arrStrSortUp);
//
// let arrStrSortDown = arrStr.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     return -1;
// })
// console.log(arrStrSortDown);
//
// let arrStrLength = arrStr.filter(value => {
//     return value.length > 4;
// })
// console.log(arrStrLength);
//
// let arrStrUpg = arrStr.map(value => {
//     return `Sam says ${value}`;
// })
// console.log(arrStrUpg);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let ageUp = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 1
// })
//
// console.log(ageUp);

// let ageDown = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1;
//     }
//     return -1
// })
//
// console.log(ageDown);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let nameLengthUp = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return -1
//     }
//     return 1
// })
// console.log(nameLengthUp);


// let nameLengthDown = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     }
//     return -1
// })
// console.log(nameLengthDown);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// ????????????????????????????????????????????????????????????????????????????????????
// let arrId = [...users]
// arrId.map((user, index) => {
//     user.id = (index + 1);
//     return user
// })
// console.log(arrId);
// console.log(users);
// ?????????????????????????????????????????????????????????????????????????????????
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//      - двигун більше 3х літрів
//
// let arrEngine3 = cars.filter(cars => {
//     return cars.volume > 3;
// })
// console.log(arrEngine3);
//
//      - двигун = 2л
//
// let withEng2 = cars.filter(cars => {
//     return cars.volume === 2;
// })
// console.log(withEng2);
//
//      - виробник мерс
//
// let mfn = cars.filter(cars => {
//     return cars.producer === 'mercedes';
// })
// console.log(mfn);
//
//      - двигун більше 3х літрів + виробник мерседес
//
// let mers3 = cars.filter(cars => {
//     return cars.producer === 'mercedes' && cars.volume > 3;
// })
// console.log(mers3);
//
//      - двигун більше 3х літрів + виробник субару
//
// let subaru3 = cars.filter(cars => {
//     return cars.producer === 'mercedes' && cars.volume > 3;
// })
// console.log(subaru3);
//
// //      - сили більше ніж 300
//
// let power = cars.filter(cars => {
//     return cars.power > 300;
// })
// console.log(power);
//
// //      - сили більше ніж 300 + виробник субару
//
// let powerAndMfn = cars.filter(cars => {
//     return cars.power > 300 && cars.producer === 'subaru';
// })
// console.log(powerAndMfn);

//      - мотор серіі ej

// let filterEng = cars.find(cars =>cars.engine.('ej'))
//
// console.log(filterEng);
///??????????????????????????????????????????????????????????????????????????????????????
//      - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log()

//      - двигун меньше 3х літрів + виробник мерседес
//
// let value3AndMfn = cars.filter(cars => {
//     return cars.volume < 3 && cars.producer === 'mercedes'
// })
// console.log(value3AndMfn);
//
// //      - двигун більше 2л + сили більше 250
//
// let filterEngMfn = cars.filter(cars => {
//     return cars.volume > 2 && cars.power > 250;
// })
// console.log(filterEngMfn);
//
//      - сили більше 250  + виробник бмв
//
// let filterPowBmw = cars.filter(cars => {
//     return cars.power > 250 && cars.producer === 'bmw'
// })
// console.log(filterPowBmw);

// - взять слдующий массив
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
//
// -- Відсортувати їх по ID
//
// let sortByIdUp = usersWithAddress.sort((a,b) =>{
//    if (a.id < b.id) {
//        return -1;
//    }
//    return 1
// });
// console.log(sortById);
//
// // -- Відсортувати їх по ID в зворотньому порядку
//
// let sortByIdDown = usersWithAddress.sort((a, b) => {
//     if (a.id < b.id) {
//         return 1;
//     }
//     return -1;
// });
// console.log(sortByIdDown);
//
// // -- Відсортувати по віку
//
// let sortByAgeUp = usersWithAddress.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 1;
// })
// console.log(sortByAgeUp);
//
// // -- Відсортувати по віку в зворотньому порядку
//
// let sortByAgeDown = usersWithAddress.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1;
//     }
//     return -1;
// })
// console.log(sortByAgeDown);
//
// // -- Відсорутвати по імені
//
// let sortByName = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     return 1;
// })
// console.log(sortByName);
//
// // -- Відсорутвати по назві вулиці
//
// let sortByStreet = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1;
//     }
//     return 1;
// })
// console.log(sortByStreet);
//
// // -- Відсорутвати по номеру будинку
//
// let sortByNum = usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number) {
//         return -1;
//     }
//     return 1;
// })
// console.log(sortByNum);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
//
// let filterByAge = usersWithAddress.filter(usersWithAddress =>{
//     return usersWithAddress.age < 30;
// })
// console.log(filterByAge);
//
// // -- Залишити тільки одружених
//
// let filterByMarried = usersWithAddress.filter(usersWithAddress =>{
//     return usersWithAddress.isMarried;
// })
// console.log(filterByMarried);
//
// // -- Залишити тільки одружених, які молодні за 30
//
// let filterByMarriedAnd30 = usersWithAddress.filter(usersWithAddress =>{
//     return usersWithAddress.isMarried && usersWithAddress.age < 30;
// })
// console.log(filterByMarriedAnd30);
//
// // -- Залишити лише тих, в кого парні номери будинків.
//
// let pairedNums = usersWithAddress.filter(usersWithAddress => {
//     return usersWithAddress.address.number %2 === 0;
// })
// console.log(pairedNums);

// -- Порахувати загальний вік всіх людей. (reduce)


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

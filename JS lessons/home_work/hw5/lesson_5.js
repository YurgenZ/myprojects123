// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
//

class AddComp {
    constructor(ram, cpu, name) {
        this.ram = ram;
        this.name = name;
        if (cpu >= 0 && cpu <= 1000) {
            this.cpu = cpu;
        }
    }

    compOn = () => console.log('you turn on this machine');

}

console.log()
let comp = new AddComp('5', '111', 'drova');
console.log(comp);
comp.compOn()

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class AddNout extends AddComp {
    constructor(ram, cpu, name, inch) {
        super(ram, cpu, name);
        this.inch = inch;

        this.power = this.inch / this.ram;
    }

    noutOn = () => console.log('you turn on this machine');
    logger = () => console.log(this);
}

let nout = new AddNout('8', '750', 'dell_lapot', '19');
nout.logger();
nout.noutOn();

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===

class AddUltrabook extends AddNout {
    constructor(ram, cpu, name, inch, weight, power) {
        super(ram, cpu, name, inch, power);
        this.weight = weight;

    }

    onUltrabook() {
        if (this.weight < 2 && this.power > 4) {
            console.log('start system')
            return
        }
        console.log('ERROR!!! it is not a ultrabook!!!');
    }

    logger = () => console.log(this);
}

let ultrabook = new AddUltrabook(4, 1000, 'supermachine', 17, 1);
ultrabook.logger();
ultrabook.onUltrabook();

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class BasicPc extends AddComp {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
        this.fps = this.cpu / this.ram;
    }

    logger = () => this;
    startGame = (enter_name) => console.log(`You are playing ${enter_name} with ${this.fps} FSP`)

    upCpu(value) {
        if (value <= (0.1 * this.cpu) && value >= 0) {
            this.cpu += value;
        }
    }

    upRam(value) {
        if (value <= this.ram && !-value) {
            this.ram += value;
        }
    }
}

let basicPc = new BasicPc(12, 500, 'basic');
basicPc.logger();
basicPc.startGame('DOOM');
basicPc.upCpu(50);
basicPc.upRam(10);

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
//     Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class GamePs extends BasicPc {
    constructor(ram, cpu, name) {
        super(ram, cpu, name,);
        this.fps = basicPc.fps * 2;
        if (this.cpu < 500 || this.ram < 8) {
            console.log('на цьому відрі ігри не запускаються.')
        }
        if (this.startGame) {
            this.cpu = this.cpu - (this.cpu%0.1)
        }
    }

    logger = () => console.log(this);
}

let gamePc = new GamePs(8, 500, 'game comp')
gamePc.logger()
gamePc.startGame()

//  -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
//
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

//
// function AttrCreate(attrName, action) {
//     this.attrName = attrName;
//     this.action = action;
// }
//
// function TegInf(name, action, attrs) {
//     this.name = name;
//     this.action = action;
//     this.attrs = [attrs];
// }


//
// let aTeg =
//         [new AttrCreate('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
//         new AttrCreate('coords', 'Устанавливает координаты активной области.'),
//         new AttrCreate('download', 'Предлагает скачать указанный по ссылке файл.')];
//
// let divTeg =
//         [new AttrCreate('align', 'Задает выравнивание содержимого тега <div>.'),
//         new AttrCreate('title', 'Добавляет всплывающую подсказку к содержимому.')];
//
// let h1Teg =
//         [new AttrCreate('align', 'Определяет выравнивание заголовка.')];
//
// // let spanTeg =
// //         [new AttrCreate('', ''),
// //         new AttrCreate('', ''),
// //         new AttrCreate('', '')];
//
// let inputTeg =
//         [new AttrCreate('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'),
//         new AttrCreate('accesskey', 'Переход к элементу с помощью комбинации клавиш.'),
//         new AttrCreate('align', 'Определяет выравнивание изображения.')];
//
// let formTeg =
//         [new AttrCreate('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'),
//         new AttrCreate('action', 'Адрес программы или документа, который обрабатывает данные формы.'),
//         new AttrCreate('autocomplete', 'Включает автозаполнение полей формы.')];
//
// let optionTeg =
//         [new AttrCreate('disabled', 'Заблокировать для доступа элемент списка.'),
//         new AttrCreate('label', 'Указание метки пункта списка.'),
//         new AttrCreate('selected', 'Заранее устанавливает определенный пункт списка выделенным.')];
//
// let selectTeg =
//         [new AttrCreate('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'),
//         new AttrCreate('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.'),
//         new AttrCreate('disabled', 'Блокирует доступ и изменение элемента.')];


// let aTegInf = new TegInf('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.' +
//     'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы,' +
//     'которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри' +
//     'веб-страницы.' +
//     'Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку.' +
//     'В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов),' +
//     'на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо ' +
//     'от имени сайта или веб-страницы, где прописана ссылка. ' +
//     'Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.',
//     aTeg);
// console.log(aTegInf);
//
// let divTegInf = new TegInf('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения' +
//     ' фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.' +
//     ' Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега' +
//     ' добавить атрибут class или id с именем селектора.' + +
//     'Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки.' +
//     ' После него также добавляется перенос строки.'
//     , divTeg);
// console.log(divTegInf);
//
// let h1TegInf = new TegInf('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции,' +
//     ' расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для' +
//     ' обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым ' +
//     'крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам,' +
//     ' они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после' +
//     ' него добавляется пустое пространство.',
//     h1Teg);
// console.log(h1TegInf);
//
// let spanTegInf = new TegInf('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных ' +
//     'элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для' +
//     ' нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный' +
//     ' тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу' +
//     ' стилей, а для тега добавить атрибут class или id с именем селектора.',
//     'Для этого тега доступны универсальные атрибуты и события.');
// console.log(spanTegInf);
//
// let inputTegInf = new TegInf('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные' +
//     ' элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей,' +
//     ' различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму,' +
//     ' но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form>' +
//     ' обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.' +
//     'Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text),' +
//     ' поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы' +
//     ' (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента ' +
//     'существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более ' +
//     'десятка новых элементов.',
//     inputTeg);
// console.log(inputTegInf);
//
// let formTegInf = new TegInf('sdf', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между' +
//     ' пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно' +
//     ' получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',
//     formTeg);
// console.log(formTegInf);
//
// let optionTegInf = new TegInf('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера' +
//     ' <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.' +
//     ' Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, ' +
//     'когда к данным списка идет обращение через скрипты',
//     optionTeg);
// console.log(optionTegInf);
//
// let selectTegInf = new TegInf('sdf', 'asadfgfdd', selectTeg);
// console.log(selectTegInf);


//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class AddTegInfo {
//     constructor(name, action, attrs) {
//         this.name = name;
//         this.action = action;
//         this.attrs = [attrs];
//     }
//
// }

// let aTegInfo = new AddTegInfo('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.' +
//     'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы,' +
//     'которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри' +
//     'веб-страницы.' +
//     'Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку.' +
//     'В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов),' +
//     'на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо ' +
//     'от имени сайта или веб-страницы, где прописана ссылка. ' +
//     'Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.', aTeg);
// console.log(aTegInfo);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// function CarCreate(model, mfr, year, max_speed, eng_volume) {
//
//     this.model = model;
//     this.mfr = mfr;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.eng_volume = eng_volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${max_speed} на годину`);
//     }
//     this.info = function () {
//         console.log(this.model,
//             this.mfr,
//             this.year,
//             this.max_speed,
//             this.eng_volume)
//     }
//
//     this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
//         this.max_speed += newSpeed;
//     }
//
//     this.changeYear = function changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function CreateDriver(name, age, exp) {
//         this.name = name;
//         this.age = age;
//         this.exp = exp;
//
//     }
// }
//
// let car = new CarCreate(' insignia', 'Opel Automobile GmbH', '2019', 218, '1490');
// console.log(car);
//
// car.drive();
// car.info();
//
// car.increaseMaxSpeed(22);
// car.changeYear(2020);
// car.addDriver('vasian', '32', '5');
// console.log(car);
//
//
//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний
// об'єкт car

// class CarCreate {
//     constructor(model, mfn, year, max_speed, volume) {
//         this.model = model;
//         this.mfn = mfn;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     };
//
//     info() {
//         console.log(this);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.max_speed += newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(name, age, exp) {
//         this.name = name;
//         this.age = age;
//         this.exp = exp;
//     }
//
//
// }
//
// let newCar = new CarCreate('drova', 'garaj', '1955', 43, 0.7)
// newCar.info();
// newCar.changeYear(1111)
// newCar.drive();
// newCar.increaseMaxSpeed(15);
// newCar.addDriver('dimas','89','70');
// console.log(newCar);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class cinderella {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
//     pushGirls() {
//         cinderellas.push(this);
//     }
// }
//
// let cinderellas = [];
//
// let margo = new cinderella('margo', '34', '38');
// margo.pushGirls()
//
// let olga = new cinderella('olga', '25', '36');
// olga.pushGirls()
//
// let natalie = new cinderella('natalie', '16', '39');
// natalie.pushGirls()
//
// let valeria = new cinderella('valeria', '38', '31');
// valeria.pushGirls()
//
// let tania = new cinderella('tania', '13', '28');
// tania.pushGirls()
//
// let ania = new cinderella('ania', '20', '38');
// ania.pushGirls()
//
// let victoria = new cinderella('victoria', '9', '25');
// victoria.pushGirls()
//
// let aleksandra = new cinderella('aleksandra', '18', '31');
// aleksandra.pushGirls()
//
// let tonia = new cinderella('tonia', '85', '46');
// tonia.pushGirls()
//
// let jaroslava = new cinderella('jaroslava', '26', '33');
// jaroslava.pushGirls()
//
// console.log(cinderellas);
//
//
// class prince {
//     constructor(name,age,slipper) {
//        this.name = name;
//        this.age = age;
//        this.slipper = slipper;
//
// }
//     }
//
// let vasia = new prince('vasia','25','33');
// console.log(vasia);
//
// for (const thisGirl of cinderellas) {
//     if (thisGirl.foot_size === vasia.slipper) {
//          console.log(thisGirl)
//     }
// }

// --створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// © 2021 GitHub, Inc.

// cinderellasArr2 = [];
//
// function Cinderella2(name,age,foot_size) {
//     this.name = name;
//     this.age = age;
//     this.foot_size = foot_size;
//
//     this.pusher = function () {
//         cinderellasArr2.push(this)
//     }
// }
//
// let margo = new Cinderella2('margo', '34', '38');
// margo.pusher();
//
// let olga = new Cinderella2('olga', '25', '36');
// olga.pusher();
//
// let natalie = new Cinderella2('natalie', '16', '39');
// natalie.pusher();
//
// let valeria = new Cinderella2('valeria', '38', '31');
// valeria.pusher();
//
// let tania = new Cinderella2('tania', '13', '28');
// tania.pusher();
//
// let ania = new Cinderella2('ania', '20', '38');
// ania.pusher();
//
// let victoria = new Cinderella2('victoria', '9', '25');
// victoria.pusher();
//
// let aleksandra = new Cinderella2('aleksandra', '18', '31');
// aleksandra.pusher();
//
// let tonia = new Cinderella2('tonia', '85', '46');
// tonia.pusher();
//
// let jaroslava = new Cinderella2('jaroslava', '26', '33');
// jaroslava.pusher();
//
// console.log(cinderellasArr2);
//
//
// function prince2(name, age, snipped) {
//     this.name = name;
//     this.age = age;
//     this.snipper = snipped;
//
//     this.searcher = function (arr) {
//         for (const arrElement of arr) {
//             if (arrElement.foot_size === snipped ) {
//                 console.log(arrElement)
//             }
//         }
//
//     }
// }
//
// let nikolai = new prince2('nikolai','54','31');
// nikolai.searcher(cinderellasArr2)
// console.log();










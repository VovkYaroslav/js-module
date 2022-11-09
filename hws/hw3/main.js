// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log("true")
} else {
    console.log("false")
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = -3;
if (time > 0 && time <= 15) {
    console.log("the first")
} else if (time > 15 && time <= 30) {
    console.log("the second")
} else if (time > 30 && time <= 45) {
    console.log("the third");
} else if (time > 45 && time <= 60) {
    console.log("the fourth")
} else if (time > 60) {
    console.log("It`s more than an hour")
} else if (time <= 0) {
    console.log("It`s less than an hour");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;
if (day >= 1 && day <= 10) {
    console.log("the firs decade")
} else if (day > 10 && day <= 20) {
    console.log("the second decade");
} else if (day > 20 && day <= 31) {
    console.log("the third decade");
} else if (day > 31) {
    console.log("it`s next month");
} else if (day < 1) {
    console.log("it`s previous month");
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numberDay = 2;
switch (numberDay) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('?????');


}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let y = +prompt();
let some = +prompt();
if (y > some) {
    console.log(y);
} else if (some > y) {
    console.log(some);
} else if (some === y) {
    console.log(some + y)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//      за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//      (хибноподыбне, тобто кастується до false)

let z = +prompt() || 'default';
console.log(z);
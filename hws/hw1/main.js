// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);

hello = `owu`
console.log(hello);

hello = 'com';
console.log(hello);

hello = 'ua';
console.log(hello);

hello = 1;
console.log(hello);

hello = 10;
console.log(hello);

hello = -999;
console.log(hello);

hello = 123;
console.log(hello);

hello = 3.14;
console.log(hello);

hello = 2.7;
console.log(hello);

hello = true;
console.log(hello);

hello = false;
console.log(hello);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = `Vovk`;
let middleName = `Yaroslav`;
let lastName = `Olegovich`;
let all = `${firstName} ${middleName} ${lastName}`;
console.log(all);
console.log(firstName, middleName, lastName);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a, a)

let b = '100';
console.log(typeof b, b)

let c = true;
console.log(typeof c, c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let f = prompt(`Vovk`);
let m = prompt(`Yaroslav`);
let l = prompt(`Olegov`);
console.log(f, m, l);

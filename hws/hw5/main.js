// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function sss(a, b) {
//
//     console.log(a * b);
//     return (a * b);
// }
//
// sss(1, 4)
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function sq(r) {
//     console.log(Math.PI * r ** 2);
// }
//
// sq(10)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function c(h, r) {
//     console.log(2*Math.PI*r*(h+r));
// }
// c(10, 10)
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr=[
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function writer(users){
//
//     for (let user of users) {
//         console.log(`<li>${user}</li>`)
//     }
//    }
// writer(arr)
//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function someText(t) {
//
//     document.write(`<p> ${t} </p>`)
//
// }
//
// someText('array it`s funny')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function inner(text) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//
//         document.write(`<li> ${text} </li>`)
//
//     }
//     document.write(`</ul>`)
//
// }
//
// inner(`fjjjjjjjjjjjjjj`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function xxx(text, index) {
//     document.write(`<ul>`)
//     for (let i = 0; i < `${index}`; i++) {
//
//         document.write(`<li> ${text} </li>`)
//
//     }
//     document.write(`</ul>`)
// }
// xxx('teeee', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, true, 'str'];
//
// function xxx(t){
//
//     document.write(`<ul>`)
//     for (const arrElement of t) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// xxx(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     { id: 1, name: 'vasya', age: 31, status: true},
//     { id: 2, name: 'petya', age: 33, status: false},
//     { id: 3, name: 'anna', age: 28, status: true},
//     { id: 4, name: 'olya', age: 29, status: false}
// ];
//
// function xxx(ddd){
//     document.write(`<div class='bloc'>`)
//     for (const dddElement of ddd) {
//
//
//         document.write(`<div class='ss'>${dddElement.id}---------${dddElement.name}________${dddElement.age}</div>`)
//
//     }
//     document.write(`</div>`)
// }
// xxx(users)
//
// - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [1, 3, 5, 6, 8, 9, 66, 88, 0, 44, 6, 7, 8, 9, 0, -1000];
//
// let minimal = function (masiff) {
//     let min = masiff[0]
//     for (let minElement of masiff) {
//         if (minElement < min) {
//             min = minElement
//         }
//     }
//     return (min)
// }
// let minimall = minimal(numbers)
// console.log(minimall)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 0];
//
// function xxx(mas){
//     let sum=0
//     for (const ma of mas) {
//         sum+=ma
//     }
//     return(sum)
// }
// console.log(xxx(arr))
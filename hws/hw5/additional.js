// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1)
//         return num1
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2)
//         return num2
//     } else {
//         console.log(num3)
//         return num3
//     }
// }
// min(5, 6, 3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2)
//         return num2
//     }else if (num2===num1||num1===num3||num3===num1===num2){
//         console.log('the numbers must be different')
//         return 0
//     }else {
//         console.log(num3)
//         return num3
//     }
// }
// max(1,3,5)

// - створити функцію яка повертає найбільше число з масиву
// let e = (arr)=>{
//     let max = arr[0]
//     for (let arrElement of arr) {
// if (arrElement>max) max=arrElement
//     }
//     return max
// }
// let rr = e([1,2,3,4,5,6,7,8,9,0])
// console.log(rr)

// - створити функцію яка повертає найменьше число з масиву



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
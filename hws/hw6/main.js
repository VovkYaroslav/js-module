// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);
//
// let xxx = 'lorem ipsum'
// console.log(xxx.length);
//
// let jic = 'javascript is cool';
// console.log(jic.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str='hello world'
// console.log(str.toUpperCase());
//
// let sd='lorem ipsum'
// console.log(sd.toUpperCase());
//
// let sr='javascript is cool'
// console.log(sr.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str='HELLO WORLD'
// console.log(str.toLowerCase());
//
// let sd='LOREM IPSUM'
// console.log(sd.toLowerCase());
//
// let sr='JAVASCRIPT IS COOL'
// console.log(sr.toLowerCase());
//

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());
// console.log(str.substring(1, 13));
// console.log(str.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map(String));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let sortNums = (direction, masiff) => {
//     if (direction === 'ascending') {
//         masiff.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         masiff.sort((a, b) => b - a)
//     }
//     return masiff;
// }
// console.log(sortNums('descending', nums));
// console.log(sortNums('ascending', nums))

//
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
//
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter((filt) => {
//     return filt.monthDuration > 5
// }));
//

// описати колоду карт
//
// let deck = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];

// // - знайти піковий туз
// let k = deck.filter((ur) => {
//     return ur.value === 'Ase' && ur.cardSuit === 'Spade'
// })
// console.log(k)
// // - всі шістки
// let six = deck.filter((tt) => {
//     return tt.value === 6
// })
// console.log(six)
//
// // - всі червоні карти
//
// let r = deck.filter(function (xxx) {
//     return xxx.color === 'Red'
// })
// console.log(r)
//
// // - всі буби
//
// let bubba = deck.filter((diamond) => {
//     return diamond.cardSuit === 'Diamonds'
// })
// console.log(bubba, bubba.length)

// - всі трефи від 9 та більше
//
//
// let filte = deck.filter(xxx => xxx.cardSuit === 'Clubs' && xxx.value >= '9' || xxx.value === 10)
// console.log(filte)

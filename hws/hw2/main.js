// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10, 20, 'str', 'number', 'true', true, false, '1234', 16.4, 55];

// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 'str';
// arr[3] = 'number';
// arr[4] = 'true';
// arr[5] = true;
// arr[6] = false;
// arr[7] = '1234';
// arr[8] = 16.4;
// arr[9] = 55;

console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const b1 = {
    title: 'some book 1', pageCount: 123, genre: 'genre 1'
};
const b2 = {
    title: 'some book 2', pageCount: 456, genre: 'genre 2'
};
const b3 = {
    title: 'some book 3', pageCount: 789, genre: 'genre 3'
};
console.log(b1, b2, b3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

const b4 = {
    title: 'some book 1', pageCount: 123, genre: 'genre 1', authors: [{name: 'name1', age: 39}]
};
const b5 = {
    title: 'some book 2', pageCount: 456, genre: 'genre 2', authors: [{name: 'name 2', age: 40}]
};
const b6 = {
    title: 'some book 3', pageCount: 789, genre: 'genre 3', authors: [{name: 'name 3', age: 50}]
};
console.log(b4, b5, b6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let massif = [
    {
        name: 'name 1',
        username: 'username 1',
        password: 'password 1'
    },
    {
        name: 'name 2',
        username: 'username 2',
        password: 'password 2'
    },
    {
        name: 'name 3',
        username: 'username 3',
        password: 'password 3'
    },
    {
        name: 'name 4',
        username: 'username 4',
        password: 'password 4'
    },
    {
        name: 'name 5',
        username: 'username 5',
        password: 'password 5'
    },
    {
        name: 'name 6',
        username: 'username 6',
        password: 'password 6'
    },
    {
        name: 'name 7',
        username: 'username 7',
        password: 'password 7'
    },
    {
        name: 'name 8',
        username: 'username 8',
        password: 'password 8'
    },
    {
        name: 'name 9',
        username: 'username 9',
        password: 'password 9'
    },
    {
        name: 'name 10',
        username: 'username 10',
        password: 'password 10'
    },
]
console.log(massif[0].password, massif[1].password, massif[2].password, massif[3].password, massif[4].password,
    massif[5].password, massif[6].password, massif[7].password, massif[8].password, massif[9].password)
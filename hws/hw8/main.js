// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
//
// }
//
// let user1 = new User(1, 'Dima', 'Vasilenko', 'hu@xyz.com', '097111-12-12');
// let user2 = new User(2, 'Vova', 'Vasilenko', 'hu@xy.com', '097112-12-12');
// let user3 = new User(3, 'Vitya', 'Vasilenko', 'hu@xz.com', '097113-12-12');
// let user4 = new User(4, 'Roma', 'Vasilenko', 'hu@yz.com', '097114-12-12');
// let user5 = new User(5, 'Makar', 'Vasilenko', 'h@xyz.com', '097115-12-12');
// let user6 = new User(6, 'Oleh', 'Vasilenko', 'u@xyz.com', '097116-12-12');
// let user7 = new User(7, 'Yarik', 'Vasilenko', 'huh@xyz.com', '097117-12-12');
// let user8 = new User(8, 'Vasia', 'Vasilenko', 'hu@xfyz.com', '097118-12-12');
// let user9 = new User(9, 'Anna', 'Vasilenko', 'hu@xhyz.com', '097119-12-12');
// let user10 = new User(10, 'Kolya', 'Vasilenko', 'hu@txyz.com', '097110-12-12');
//
// let users = []
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
//
// console.log(users)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let usersfilter = users.filter(xxx => xxx.id % 2 === 0);
// console.log(usersfilter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) =>
//     a.id - b.id
// ));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let client1 = new Client(1, 'Dima', 'Vasilenko', 'hu@xyz.com', '097111-12-12', [
    {title: 'potato', price: 2,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client2 = new Client(2, 'Vova', 'Vasilenko', 'hu@xy.com', '097112-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client3 = new Client(3, 'Vitya', 'Vasilenko', 'hu@xz.com', '097113-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client4 = new Client(4, 'Roma', 'Vasilenko', 'hu@yz.com', '097114-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client5 = new Client(5, 'Makar', 'Vasilenko', 'h@xyz.com', '097115-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client6 = new Client(6, 'Oleh', 'Vasilenko', 'u@xyz.com', '097116-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client7 = new Client(7, 'Yarik', 'Vasilenko', 'huh@xyz.com', '097117-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client8 = new Client(8, 'Vasia', 'Vasilenko', 'hu@xfyz.com', '097118-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client9 = new Client(9, 'Anna', 'Vasilenko', 'hu@xhyz.com', '097119-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let client10 = new Client(10, 'Kolya', 'Vasilenko', 'hu@txyz.com', '097110-12-12', [
    {title: 'milk', price: 22,},
    {title: 'juice', price: 27,},
    {title: 'tomato', price: 47,},
    {title: 'tea', price: 15,}
]);
let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
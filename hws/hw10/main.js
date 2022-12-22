// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let list = document.createElement(`ul`);
document.body.append(list)

fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let user = document.createElement(`li`)
            user.innerText = `${valueElement.id} ${valueElement.name}`
            let link = document.createElement(`a`)
            link.innerText = `Details about user`
            link.href = `user-details.html?identeficator=${valueElement.id}`
            list.append(user, link);

        }
    })
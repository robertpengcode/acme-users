
const userList = document.querySelector('#userList')
//const lastaNames = document.querySelector('#lastNames')

const numberList = document.querySelector('#numberList')



const renderFirstNames = (users) => {
    const userObj = users.users;
    const html = userObj.map( (user) => {
        return `<tr><td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.title}</td></tr>`;

    }).join('');

    console.log(html);

    userList.innerHTML = html;
}

// const renderLastNames = (users) => {
//     const userObj = users.users;
//     const html = userObj.map( (user) => {
//         return `<tr>${user.lastName}</tr>`;

//     }).join('');

//     lastNames.innerHTML = html;
// }

const renderNumbers = () => {

    let html = '';

    for (let i = 0; i <= 23; i++) {

        html +=
        
        `
        <li>${i+1}
            <a href='acme-users-api-rev.herokuapp.com/api/users/${i}'
        </li>
        
        `
        

    }
    numberList.innerHTML = html;
}

renderNumbers();




fetch('https://acme-users-api-rev.herokuapp.com/api/users')
    .then(response => response.json())
    //.then(response => console.log(response))
    //.then(result => console.log(result));
    .then(result => renderFirstNames(result))

// fetch('https://acme-users-api-rev.herokuapp.com/api/users')
//     .then(response => response.json())
//     //.then(response => console.log(response))
//     //.then(result => console.log(result));
//     .then(result => renderLastNames(result))
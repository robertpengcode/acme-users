
const userList = document.querySelector('#userList')
//const lastaNames = document.querySelector('#lastNames')





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

    const html = 

    for (let i = 1; i <= 24; i++) {
        

    }
    return 
}






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
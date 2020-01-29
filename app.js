const userList = document.querySelector('#userList')
const numberList = document.querySelector('#numberList')

const renderUsers = (users) => {
    const html = users.map( (user) => {
        return `<tr><td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.title}</td></tr>`;
    }).join('');
    userList.innerHTML = html;
}

const renderNumbers = (count) => {
    let html = [];
    for (let i = 1; i <= (count/50 + 1); i++) {
        html.push(`<li><a href='#${i-1}'>${i}</a></li>`);
    }
    console.log(html);
    numberList.innerHTML = html.join('');
}

fetch('https://acme-users-api-rev.herokuapp.com/api/users')
    .then(response => response.json())
    .then(result => {renderNumbers(result.count);
        renderUsers(result.users);
    })
    
window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    console.log(id);
    fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
        .then(response => response.json())
        .then(result => renderUsers(result.users))
})

    
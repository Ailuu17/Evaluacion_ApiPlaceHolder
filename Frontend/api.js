async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUsers(users) {
    document.getElementById('mostrarLista').innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.textContent = `${user.name} - ${user.email}`;
        userItem.addEventListener('click', () => Detalles(user));
        document.getElementById('mostrarLista').appendChild(userItem);
    });
}

function Detalles(user) {
    alert(`Username: ${user.username}\nPhone: ${user.phone}\nCompany: ${user.company.name}`);
}

document.getElementById('search').addEventListener('input', () => {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const userItems = document.querySelectorAll('.user-item');
    userItems.forEach(item => {
        const userName = item.textContent.toLowerCase();
        item.style.display = userName.includes(searchTerm) ? 'block' : 'none';
    });
});

fetchUsers();
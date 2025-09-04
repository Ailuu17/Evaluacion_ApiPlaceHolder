let users = [];
const lista = document.getElementById('mostrarLista');
const searchInput = document.getElementById('search');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUsers(userArray) {
    lista.innerHTML = '';
    userArray.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.textContent = `${user.name} - ${user.email}`;
        userItem.addEventListener('click', () => showDetails(user, userItem));
        lista.appendChild(userItem);
    });
}

function showDetails(user, userItem) {
    // Remove previous details
    const prevDetails = userItem.querySelector('.user-details');
    if (prevDetails) prevDetails.remove();

    const details = document.createElement('div');
    details.classList.add('user-details');
    details.innerHTML = `
        <strong>Username:</strong> ${user.username}<br>
        <strong>Phone:</strong> ${user.phone}<br>
        <strong>Company:</strong> ${user.company.name}
    `;
    userItem.appendChild(details);
    details.style.display = 'block';
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );
    displayUsers(filtered);
});

fetchUsers();
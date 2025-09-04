// This file contains the programming logic for fetching and displaying user data, implementing search functionality, and showing user details on click.

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const userListContainer = document.getElementById('user-list');
const searchInput = document.getElementById('search-input');

async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUsers(users) {
    userListContainer.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.textContent = `${user.name} - ${user.email}`;
        userItem.addEventListener('click', () => showUserDetails(user));
        userListContainer.appendChild(userItem);
    });
}

function showUserDetails(user) {
    alert(`Username: ${user.username}\nPhone: ${user.phone}\nCompany: ${user.company.name}`);
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const userItems = document.querySelectorAll('.user-item');
    userItems.forEach(item => {
        const userName = item.textContent.toLowerCase();
        item.style.display = userName.includes(searchTerm) ? 'block' : 'none';
    });
});

fetchUsers();
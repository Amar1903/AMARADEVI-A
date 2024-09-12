document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = data.map(user => `
                <li>${user.name} (${user.email}) - ${user.phone}</li>
            `).join('');
        })
        .catch(error => console.error('Error fetching user data:', error));
});

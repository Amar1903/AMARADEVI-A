document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = Object.fromEntries(formData.entries());

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert('User created successfully!');
        window.location.href = 'user-list.html';
    })
    .catch(error => console.error('Error creating user:', error));
});

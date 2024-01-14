document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(response.ok) {
            
            document.getElementById('dashboard').style.display = 'block';
        } else {
            alert('Login failed');
        }
    })
    .catch(error => console.error('Error:', error));
});

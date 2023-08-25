document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'good' && password === 'you_did_it') {
        alert('HTB{7h1s_w4s_7oo_ez}');
    } else {
        alert('Invalid credentials. Try again.');
    }
});

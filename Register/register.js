document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let termsChecked = document.getElementById('terms').checked;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    
    if (!name || !username || !password || !email || !phone || !termsChecked) {
        alert('Please fill all fields correctly.');
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Enter a valid email address.');
        return;
    }
    if (!phonePattern.test(phone)) {
        alert('Enter a valid 10-digit phone number.');
        return;
    }
    
    alert('Registration Successful!');
});
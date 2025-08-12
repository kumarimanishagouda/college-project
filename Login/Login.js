document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form"); // Selects the login form

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMessage = "";

        // Username validation (letters & numbers, min 4 chars)
        let usernamePattern = /^[a-zA-Z0-9]{4,}$/;
        if (!usernamePattern.test(username)) {
            errorMessage += "❌ Username must be at least 4 characters long and contain only letters & numbers.\n";
        }

        // Password validation (6+ characters, at least 1 number & 1 letter)
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordPattern.test(password)) {
            errorMessage += "❌ Password must be at least 6 characters long and include at least 1 letter and 1 number.\n";
        }

        // Show validation errors
        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert(`✅ Welcome, ${username}! Login Successful 🎉`);
            // Redirect after successful login
            window.location.href = "dashboard.html"; // Change this to your actual dashboard page
        }
    });
});

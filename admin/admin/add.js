document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      const username = document.querySelector("#username").value.trim();
      const password = document.querySelector("#password").value.trim();
  
      // Dummy admin login
      if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        // Redirect to dashboard or admin page
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });
  
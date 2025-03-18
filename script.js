document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const validUsername = "Ancheta";
    const validPassword = "12345678";

    const username = document.getElementById("FN").value;
    const password = document.getElementById("PW").value;
  
    if (username === validUsername && password === validPassword) {

      document.getElementById("message").textContent = "Login successful! Redirecting...";
      document.getElementById("message").style.color = "green";

      setTimeout(() => {
        window.location.href = "Dashboard.html";
      }, 1500);
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
      document.getElementById("message").style.color = "red";
    }
  });
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // hardcoded username and password
    const hardcodedUsername = "admin";
    const hardcodedPassword = "password123";
  
    // check if username and password are a match
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // redirect user to another HTML file
      window.location.href = "admin.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
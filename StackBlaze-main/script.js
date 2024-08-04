// Function to validate form fields
function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var cpassword = document.getElementById("cpassword").value.trim();
    var isValid = true;
  
    // Validate username
    if (username === "") {
      showError("username", "Username is required.");
      isValid = false;
    } else if (!isValidUsername(username)) {
      showError("username", "Username must contain alphanumeric characters and underscores.");
      isValid = false;
    } else {
      hideError("username");
    }
  
    // Validate email
    if (email === "") {
      showError("email", "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    } else {
      hideError("email");
    }
  
    // Validate password
    if (password === "") {
      showError("password", "Password is required.");
      isValid = false;
    } else if (!isValidPassword(password)) {
      showError("password", "Password must be at least 8 characters long, contain lowercase, uppercase, and numeric characters, and optionally include a special character.");
      isValid = false;
    } else {
      hideError("password");
    }
  
    // Validate confirm password
    if (cpassword === "") {
      showError("cpassword", "Please confirm your password.");
      isValid = false;
    } else if (password !== cpassword) {
      showError("cpassword", "Passwords do not match.");
      isValid = false;
    } else {
      hideError("cpassword");
    }
  
    // If validation is successful, redirect to another page (assuming `target="_blank"` is set in the form)
    if (isValid) {
      document.getElementById("form").target = "_blank"; // Prevent redirect within the same window
      return true; // Allow form submission
    } else {
      return false; // Prevent form submission if validation fails
    }
  }
  
  // Function to show error message for a specific field
  
 
  function showError(fieldId, errorMessage) {
    var errorElement = document.getElementById(fieldId + " + .error"); // Assuming there's an adjacent `.error` element
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
  }
  

function validateLoginForm() {
    let valid = true; // Form validation flag

    // Get input elements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Get span elements for error display
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Clear previous errors
    clearErrors();

    // Email validation
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === "") {
        emailError.innerText = "Email is required.";
        emailInput.style.borderColor = "red";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        emailInput.style.borderColor = "red";
        valid = false;
    }

    // Password validation
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; // At least 6 characters, 1 number, 1 special character

    if (password === "") {
        passwordError.innerText = "Password is required.";
        passwordInput.style.borderColor = "red";
        valid = false;
    } else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters long.";
        passwordInput.style.borderColor = "red";
        valid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.innerText = "Password must contain at least one number and one special character.";
        passwordInput.style.borderColor = "red";
        valid = false;
    } else if (password.indexOf(' ') !== -1) {
        passwordError.innerText = "Password cannot contain spaces.";
        passwordInput.style.borderColor = "red";
        valid = false;
    }

    return valid; // Return whether the form is valid or not
}

// Function to clear all error messages and reset border colors
function clearErrors() {
    document.getElementById("email-error").innerText = ""; // Clear email error
    document.getElementById("password-error").innerText = ""; // Clear password error
    document.getElementById("email").style.borderColor = ""; // Reset email border
    document.getElementById("password").style.borderColor = ""; // Reset password border
}
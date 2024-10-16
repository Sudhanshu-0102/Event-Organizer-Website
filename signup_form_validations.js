// Function to validate the entire form
function validateForm() {
    let valid = true; // Flag to track if the form is valid

    // Validate First Name
    let firstName = document.getElementById("userfirstname").value;
    if (firstName.trim() === "") {
        document.getElementById("userfn-error").innerHTML = "First Name is required.";
        valid = false;
    } else {
        document.getElementById("userfn-error").innerHTML = "";
    }

    // Validate Last Name
    let lastName = document.getElementById("userlastname").value;
    if (lastName.trim() === "") {
        document.getElementById("userln-error").innerHTML = "Last Name is required.";
        valid = false;
    } else {
        document.getElementById("userln-error").innerHTML = "";
    }

    // Validate Email
    let email = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerHTML = "Enter a valid email address.";
        valid = false;
    } else {
        document.getElementById("email-error").innerHTML = "";
    }

    // Validate Confirm Email
    let confirmEmail = document.getElementById("cn-email").value;
    if (confirmEmail !== email) {
        document.getElementById("cnemail-error").innerHTML = "Email does not match.";
        valid = false;
    } else {
        document.getElementById("cnemail-error").innerHTML = "";
    }

    // Validate Contact Number (10-digit number)
    let contactNo = document.getElementById("mobile").value;
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNo)) {
        document.getElementById("mobile-error").innerHTML = "Enter a valid 10-digit contact number.";
        valid = false;
    } else {
        document.getElementById("mobile-error").innerHTML = "";
    }

    // Validate Password
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        document.getElementById("password-error").innerHTML = "";
    }

    // Validate Confirm Password
    let confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmpwd-error").innerHTML = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirmpwd-error").innerHTML = "";
    }

    // Validate State
    let state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("state-error").innerHTML = "Please select your state.";
        valid = false;
    } else {
        document.getElementById("state-error").innerHTML = "";
    }

    // Validate City
    let city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("city-error").innerHTML = "Please select your city.";
        valid = false;
    } else {
        document.getElementById("city-error").innerHTML = "";
    }

    // Validate Pincode (6-digit number)
    let pincode = document.getElementById("pincode").value;
    let pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(pincode)) {
        document.getElementById("pincode-error").innerHTML = "Enter a valid 6-digit pincode.";
        valid = false;
    } else {
        document.getElementById("pincode-error").innerHTML = "";
    }

    // If the form is not valid, prevent submission
    return valid;
}

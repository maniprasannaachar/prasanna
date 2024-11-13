document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let errors = [];

    // Validation Checks
    if (fullName.length < 5) {
        errors.push("Full Name must be at least 5 characters long.");
    }

    if (!email.includes('@')) {
        errors.push("Enter a valid Email ID.");
    }

    if (phone.length !== 10 || phone === '123456789') {
        errors.push("Phone Number must be a 10-digit number and cannot be '123456789'.");
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        errors.push("Password must be at least 8 characters long and cannot be 'password' or your name.");
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Display Errors
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
        // Here you can proceed with form submission, e.g., sending data to server
    }
});
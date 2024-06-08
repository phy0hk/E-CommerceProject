let form = document.getElementById('form');
let username = document.querySelector('input[name="username"]');
let email = document.querySelector('input[name="email"]');
let password = document.querySelector('input[name="password"]');
let confirmPassword = document.querySelector('input[name="confirm_password"]');

//Checking so the form is not empty
function validateForm() {
    if ( username.value === '' || email.value === '' || password.value === '' || confirmPassword === '' ) {
        alert('Please fill out all fields');
        return false;
    }
    return true;
};

// Check if two password are matched.
    form.addEventListener('submit', (e) => {
    console.log("Password: " + password.value);
    console.log("Confirm Password: " + confirmPassword.value);
    if ( password.value !== confirmPassword.value ) {
        alert("Password does not match");
        e.preventDefault();
        };
    });

//For revealing the password
function togglePasswordVisibility() {
    let passwordField = document.querySelector('input[name="password"]');
    let confirmPasswordField = document.querySelector('input[name="confirm_password"]');

    if ( passwordField.type === "password" ) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    };
};

//Showing strength of the password
password.addEventListener('input', () => {
    let strengthBar = document.getElementById('password_strength');
    let strength = checkPasswordStrength(password.value);
    strengthBar.textContent = "Password Strength is " + strength;
});
function checkPasswordStrength(password) {
    strength = "week";
    if ( password.length >= 8 ) {
    strength = "medium";
    };
    if ( password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) ) {
        strength = "strong";
    };
    return strength;
};

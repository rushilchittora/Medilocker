// Grab elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Toggle between login and signup forms
loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Switch to signup form from login form
switchToSignup.addEventListener('click', () => {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Switch to login form from signup form
switchToLogin.addEventListener('click', () => {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

// Handle signup form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent default form submission

    const fullName = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('new-password').value;

    const signupData = {
        fullName: fullName,
        mobile: mobile,
        password: password
    };

    // Send signup data to server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Show success or error message
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

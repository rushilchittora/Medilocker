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

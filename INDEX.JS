document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginBtn.setAttribute('aria-pressed', 'true');
        signupBtn.setAttribute('aria-pressed', 'false');
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupBtn.setAttribute('aria-pressed', 'true');
        loginBtn.setAttribute('aria-pressed', 'false');
    });

    switchToSignup.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupBtn.setAttribute('aria-pressed', 'true');
        loginBtn.setAttribute('aria-pressed', 'false');
    });

    switchToLogin.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginBtn.setAttribute('aria-pressed', 'true');
        signupBtn.setAttribute('aria-pressed', 'false');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('username').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('new-password').value;

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, mobile, password })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            fetchAllRecords();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function fetchAllRecords() {
        fetch('/records')
            .then(response => response.json())
            .then(data => {
                displayRecords(data);
            })
            .catch(error => {
                console.error('Error fetching records:', error);
            });
    }

    function displayRecords(records) {
        const recordsContainer = document.getElementById('records-list');
        recordsContainer.innerHTML = '';
        records.forEach(record => {
            const div = document.createElement('div');
            div.classList.add('record');
            div.innerHTML = `<p>ID: ${record.id}</p><p>Name: ${record.fullname}</p><p>Mobile: ${record.mobile}</p>`;
            recordsContainer.appendChild(div);
        });
    }

    fetchAllRecords();
});
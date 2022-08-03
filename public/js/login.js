const loginForm = document.querySelector('.login');

loginLogic = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.trim();

    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        
        console.log(response);
    }
};

loginForm.addEventListener('submit', loginLogic);
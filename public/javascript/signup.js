
async function signupFormHandler(event) {
    event.preventDefault();

    const userName = document.querySelector('#unSignUpInput').value.trim();
    const password = document.querySelector('#pwSignUpInput').value.trim();

    if (userName && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                "user_name": userName,
                "password": password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

const signUpBtn = document.querySelector('#signUpBtn');
if (signUpBtn) {
    document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler);
}
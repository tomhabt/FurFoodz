
async function signupFormHandler(event) {
    event.preventDefault();

    const userName = document.querySelector('#unSignUpInput').value.trim();
    const password = document.querySelector('#pwSignUpInput').value.trim();
    const passwordConfirm = document.querySelector('#pwSignUpConfirm').value.trim();

    if (password !== passwordConfirm) {
        $('#signUpError').html('*Passwords must match!');
        $('#pwSignUpConfirm').val('');
        $('#pwSignUpInput').val('');
    } else if (!userName) {
        $('#signUpError').html('*Enter a User Name!');
        $('#pwSignUpConfirm').val('');
        $('#pwSignUpInput').val('');
    } else if (!password || !passwordConfirm) {
        $('#signUpError').html('*Missing Password or Confirm input!');
        $('#pwSignUpConfirm').val('');
        $('#pwSignUpInput').val('');
    } else if (userName && password && passwordConfirm) {
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
            $('#signUpError').html('*Error occured..\nPlease try again.');
        }
    } else {
        $('#signUpError').html('*Error occured..\nPlease try');
    }
}

const signUpBtn = document.querySelector('#signUpBtn');
if (signUpBtn) {
    document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler);
}
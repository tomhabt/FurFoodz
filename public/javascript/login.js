

async function loginFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector('#unInput').value.trim();
  const password = document.querySelector('#pwInput').value.trim();

  if (userName && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        "user_name": userName,
        "password": password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
};

const loginBtn = document.querySelector('#loginBtn');
if (loginBtn) {
  document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);
}


async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    console.log("Logout Ok");
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

let logOutBtn = $('#logOutBtn');
if (logOutBtn) {
  logOutBtn.click(() => {
    logout();
  });
}
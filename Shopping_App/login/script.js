let userEmail = document.getElementById('email');
let userPaswd = document.getElementById('paswd');
let logBtn = document.getElementById('loginbtn');

logBtn.addEventListener('click', () => {
  if (localStorage.getItem('users') !== null) {
    let users = JSON.parse(localStorage.getItem('users'));
    let loggedInUser = null;

    for (let i = 0; i < users.length; i++) {
      if (userEmail.value === users[i].Email && userPaswd.value === users[i].Password) {
        loggedInUser = users[i];
        break;
      }
    }

    if (loggedInUser) {
      alert('Login successful');
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      window.location.href = '/shop/index.html';
    } else {
      alert('Wrong email or password');
    }
  } else {
    alert('No users found');
  }
});

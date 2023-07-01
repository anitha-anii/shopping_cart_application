
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let paswd = document.getElementById('password');
let cpaswd = document.getElementById('cpassword');
let button = document.getElementById('signupbtn');

button.addEventListener('click', () => {
  if (fname.value.trim() === '' || lname.value.trim() === '' || email.value.trim() === '' || paswd.value.trim() === '' || cpaswd.value.trim() === '') {
    alert('Fill in all the fields');
    return;
  }

  if (paswd.value !== cpaswd.value) {
    alert('Passwords do not match');
    paswd.value = '';
    cpaswd.value = '';
    return;
  }

  if (localStorage.getItem('users') !== null) {
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].Email === email.value) {
        alert('This email already has an account');
        return;
      }
    }
  }

  StoringData(fname, lname, email, paswd);

  fname.value = '';
  lname.value = '';
  email.value = '';
  paswd.value = '';
  cpaswd.value = '';

  alert('Sign up successful');
  window.location.href = '/shop/index.html'; 
});

function StoringData(fname, lname, email, paswd) {
  let userObj = {
    FirstName: fname.value,
    LastName: lname.value,
    Email: email.value,
    Password: paswd.value,
  };

  if (localStorage.getItem('users') !== null) {
    let users = JSON.parse(localStorage.getItem('users'));
    users.push(userObj);
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    let users = [userObj];
    localStorage.setItem('users', JSON.stringify(users));
  }

  sessionStorage.setItem('loggedInUser', JSON.stringify(userObj));
}

let messages = document.querySelectorAll('.alert a');
messages.forEach(message => {
  message.addEventListener('click', () => {
    alert('you need to login/signup😢');
  });
});
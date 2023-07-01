
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let saveInfoBtn = document.getElementById('saveInfo');
let changeBtn = document.getElementById('changebtn');
let logoutBtn = document.getElementById('logoutbtn');


let loggedInfo = JSON.parse(sessionStorage.getItem('loggedInUser'));


fname.textContent = loggedInfo.FirstName;
lname.textContent = loggedInfo.LastName;


saveInfoBtn.addEventListener('click', () => {
  
  let updatedFirstName = fname.textContent;
  let updatedLastName = lname.textContent;

  
  loggedInfo.FirstName = updatedFirstName;
  loggedInfo.LastName = updatedLastName;
  sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInfo));

  alert('Info saved successfully');
});


changeBtn.addEventListener('click', () => {
  let oldPassword = document.getElementById('old').value;
  let newPassword = document.getElementById('new').value;
  let confirmNewPassword = document.getElementById('Confirm').value;

  
  if (oldPassword === loggedInfo.Password) {
        if (newPassword === confirmNewPassword) {
           loggedInfo.Password = newPassword;
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInfo));
      alert('Password changed successfully');
    } else {
      alert('New password and confirm password do not match');
    }
  } else {
    alert('Old password is incorrect');
  }
});

logoutBtn.addEventListener('click', () => {
    sessionStorage.clear();
  window.location.href = '/index.html';
});

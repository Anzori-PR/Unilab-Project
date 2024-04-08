// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
});

// ----------- Terms and conditions pop Up

const terms = document.getElementById('terms');
const popUp = document.querySelector('.popUp');
const button = document.getElementById('agree');

terms.addEventListener('click', () => {
    popUp.style.display = 'flex';
});
button.addEventListener('click', () => {
    popUp.style.display = 'none';
})

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const registerBtn = document.getElementById('register-btn');
const error = document.getElementById('error');


registerBtn.addEventListener('click', () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const repasswordValue = repassword.value;

    // Validate input
    if (!firstNameValue || !lastNameValue || !emailValue || !passwordValue || !repasswordValue) {
        error.innerText = 'Please fill out all fields';
        error.style.color = 'red';
        return;
    }

    // Checking 
    if (passwordValue !== repasswordValue) {
        error.innerText = 'Passwords do not match';
        error.style.color = 'red';
        return;
    }

    // Store data
    const userData = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
    };

    // Push user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Success
    error.innerText = 'Registration successful!';
    error.style.color = 'green';

    // Clear the input fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    repassword.value = '';
});

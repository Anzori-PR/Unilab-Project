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

// Sign In
const email = document.getElementById('email');
const password = document.getElementById('password');
const signInBtn = document.getElementById('signInBtn');

const errorEmail = document.getElementById('errorEmail');
const errorPass = document.getElementById('errorPass');
const success = document.getElementById('success');

signInBtn.addEventListener('click', () => {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));

    if (savedUserData) {
        const savedEmail = savedUserData.email;
        const savedPassword = savedUserData.password;

        const enteredEmail = email.value.trim();
        const enteredPassword = password.value;

        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
            errorEmail.innerText = '';
            errorPass.innerText = '';

            success.innerText = 'Login successful!';
            success.style.color = 'green';
            
            setTimeout(() => {
                window.location.href = '../Home/index.html'
            }, 1000);
        } else {
            errorEmail.innerText = 'Wrong email';
            errorEmail.style.color = 'red';
            errorPass.innerText = 'Wrong password';
            errorPass.style.color = 'red';
        }
    } else {
        success.innerText = 'No user data found. Please register first.';
        success.style.color = 'red';
    }
})


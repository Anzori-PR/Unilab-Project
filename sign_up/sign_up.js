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
// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
});
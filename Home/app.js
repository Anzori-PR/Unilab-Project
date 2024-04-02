// ------- Header background functional

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var menu = document.querySelector('menu');
    var links = menu.querySelectorAll('a');
    var user = document.querySelector('.user');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 40) {
        header.classList.add('header-fixed');
        links.forEach(function(link) {
            link.classList.add('fixed-colors');
        });
        user.classList.remove('user-default');
        user.classList.add('user-scrolled');
    } else {
        header.classList.remove('header-fixed');
        links.forEach(function(link) {
            link.classList.remove('fixed-colors');
        });
        user.classList.remove('user-scrolled');
        user.classList.add('user-default');
    }
});

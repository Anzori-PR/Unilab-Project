// ------- Header background functional

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var menu = document.querySelector('menu');
    var links = menu.querySelectorAll('a');
    var logo = document.getElementById('logo-text');
    var user = document.querySelector('.user');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('header-fixed');
        links.forEach(function (link) {
            link.classList.add('fixed-colors');
        });
        logo.classList.add('fixed-colors');
        user.classList.remove('user-default');
        user.classList.add('user-scrolled');
    } else {
        header.classList.remove('header-fixed');
        links.forEach(function (link) {
            link.classList.remove('fixed-colors');
        });
        logo.classList.remove('fixed-colors');
        user.classList.remove('user-scrolled');
        user.classList.add('user-default');
    }
});

// ----------- Carousel Logic
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardContainer = document.querySelector('.carousel-card-container');

    let cardIndex = 0;
    const cardsPerPage = 4;

    prevBtn.addEventListener('click', function () {
        cardIndex = Math.max(cardIndex - cardsPerPage, 0);
        updateCardPosition();
    });

    nextBtn.addEventListener('click', function () {
        cardIndex = Math.min(cardIndex + cardsPerPage, cardContainer.children.length - cardsPerPage);
        updateCardPosition();
    });

    function updateCardPosition() {
        cardContainer.style.transform = `translateX(-${cardIndex * (100 / cardsPerPage)}%)`;
    }
});



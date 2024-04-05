import { servicesData, carouselData, blogsData } from '../data/home-db.js';
// ------- Header background functional

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let menu = document.querySelector('menu');
    let links = menu.querySelectorAll('a');
    let logo = document.getElementById('logo-text');
    let user = document.querySelector('.user');
    let scrollPosition = window.scrollY;

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

// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
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

// -------------- Services card data
const servicesContainer = document.querySelector('.services-card');

servicesData.forEach((service) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('first-card');

    cardDiv.innerHTML = `
        <div class="first-card-img">
            <img src=${service.img} alt="servicesCard">
        </div>
        <h3>${service.title}</h3>
        <p>${service.text}</p>
    `;

    servicesContainer.appendChild(cardDiv);
});



// ----------- Carousel card data
const carousel_card_container = document.querySelector('.carousel-card-container');

carouselData.forEach((data) => {
    const carouselCard = document.createElement('div');
    carouselCard.classList.add('carousel-card')

    carouselCard.innerHTML = `
        <div class="carousel-card-img">
            <img src=${data.img} alt="TourCard">
        </div>
        <h3>${data.title}</h3>
        <p>${data.text}</p>
        <p>${data.price}</p>
    `
    carousel_card_container.appendChild(carouselCard);
});

// ---------- Blogs card data
const blog_cards_container = document.querySelector('.blog-cards-container');

blogsData.forEach((blogs) => {

    const blogsCard = document.createElement('div');
    blogsCard.classList.add('blog-cards');

    blogsCard.innerHTML = `
    <div class="blogs-img">
        <img src=${blogs.img} alt="blogsCard">
    </div>
    <h3>${blogs.title}</h3>
    `
    blog_cards_container.appendChild(blogsCard);
});






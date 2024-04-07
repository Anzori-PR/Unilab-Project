import { resorts, stays_carousel } from "../../data/resort-db.js";
import { detailsInfo } from "../../data/details-db.js";

// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
});



// ------------- Resort Search
const flight_search_btn = document.getElementById('flight-search-btn');
const property = document.querySelector('.property');
const output_section = document.querySelector('.output-section');
const search = document.querySelector('.search');

flight_search_btn.addEventListener('click', () => {
    property.style.display = 'none';
    output_section.style.display = 'flex';
})

// ------------ Stays Carousel data fetch
const carousel_container = document.querySelector('.carousel');

stays_carousel.forEach(data => {
    const carousel_card = document.createElement('div');
    carousel_card.classList.add('carousel-card');

    carousel_card.innerHTML = `
        <img src=${data.img} alt="stays carousel imgs">
        <p>${data.title}</p>
    `
    carousel_container.appendChild(carousel_card);
})



// ------------ Resort Data fetch
const resort_container = document.querySelector('.resort-section');

resorts.forEach(data => {
    const resort_card = document.createElement('div');
    resort_card.classList.add('resort-card-container');

    resort_card.innerHTML = `
        <div class="resort-card">
            <img src=${data.img} alt="resort img">

            <div class="description">
                <div class="text">
                    <div class="description-text">
                        <h3>${data.title}</h3>
                        <h4>${data.desc1}</h4>
                        <h5>${data.desc2}</h5>

                        <h6>${data.desc3}</h6>
                    </div>
                    <div class="rating-text">
                        <p>Rating:</p>
                        <span class="stars">
                            <img src="../../data/images/resort-img/Star 5.png" alt="star">
                            <img src="../../data/images/resort-img/Star 5.png" alt="star">
                            <img src="../../data/images/resort-img/Star 5.png" alt="star">
                            <img src="../../data/images/resort-img/Star 5.png" alt="star">
                            <img src="../../data/images/resort-img/Star 5.png" alt="star">
                        </span>
                        <p>price:</p>
                        <span>${data.price}</span>
                    </div>
                </div>
                <button class="details-button">Show details</button>
            </div>
        </div>
    `

    resort_container.appendChild(resort_card);

    const detailsButton = resort_card.querySelector('.details-button');
    detailsButton.addEventListener('click', () => {
        showDetails();
    });
})

// ------------- Show Details
const details_section = document.querySelector('.details-section');
function showDetails() {
    property.style.display = 'none';
    output_section.style.display = 'none';
    search.style.display = 'none'
    details_section.style.display = 'flex'


    const details_container = document.querySelector('.details-container');
    detailsInfo.forEach(data => {
        const details_output = document.createElement('div');
        details_output.classList.add('details-output')

        details_output.innerHTML = `
            <div class="details-title">
                <div class="details-name">
                    <h1>${data.title}</h1>
                    <p>  <img src="../../data/images/details-img/location.png" alt="">   ${data.adress}</p>
                </div>

                <div class="details-rating">
                    <p>Rating:</p>
                    <span>
                        <img src="../../data/images/details-img/heart.png" alt="heart">
                        <img src="../../data/images/details-img/share.png" alt="share">
                        <img src="../../data/images/resort-img/Star 5.png" alt="star">
                        <img src="../../data/images/resort-img/Star 5.png" alt="star">
                        <img src="../../data/images/resort-img/Star 5.png" alt="star">
                        <img src="../../data/images/resort-img/Star 5.png" alt="star">
                        <img src="../../data/images/resort-img/Star 5.png" alt="star">
                    </span>
                </div>
            </div>
            <div class="imgs-container">
                <div class="upper">
                    <img src=${data.imgs.img1} alt="apartment img">
                    <span>
                        <img src=${data.imgs.img2} alt="apartment img">
                        <img src=${data.imgs.img3} alt="apartment img">
                    </span>
                </div>
                <div class="down">
                    <img src=${data.imgs.img4} alt="apartment img">
                    <img src=${data.imgs.img5} alt="apartment img">
                    <img src=${data.imgs.img6} alt="apartment img">
                    <img src=${data.imgs.img7} alt="apartment img">
                </div>
            </div>
            <div class="buttons-container">
                <span class="details-price">Price: ${data.price}</span>
                <span class="details-total-price">Price: ${data.totalPrice}</span>
                <button>Book now</button>
            </div>
            <div class="details-desc">
                <p>${data.description}</p>
            </div>
        `

        details_container.appendChild(details_output);
    })
}



// ----------- Carousel Logic
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardContainer = document.querySelector('.carousel');

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


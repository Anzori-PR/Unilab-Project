import { flightCard } from '../../data/flight-db.js'

// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
});


// ------------ Burger Menu Click 
const burger = document.querySelector('.burger');
const burger_result = document.querySelector('.burger-output-container');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
    burger_result.style.display = 'block'
})

close.addEventListener('click', () => {
    burger_result.style.display = 'none'
})

// ------------ Filter Click
const filter_click = document.getElementById('filter-click');
const filter_container = document.querySelector('.filter-container');
const output_cards = document.querySelector('.output-cards');
const child_header = document.querySelector('.child-header');
const filter_back = document.getElementById('filter-back');

filter_click.addEventListener('click', () => {

    if (filter_container.style.display === 'flex') {
        filter_container.style.display = 'none';
        output_cards.style.display = 'flex';
        search_container.style.display = 'flex';
        child_header.style.display = 'flex';
        filter_back.style.display = 'none';
        filter_click.style.marginTop = '10px';
    } else {
        filter_container.style.display = 'flex';
        filter_click.style.marginTop = '120px';
        output_cards.style.display = 'none';
        search_container.style.display = 'none';
        child_header.style.display = 'none';
        filter_back.style.display = 'block';
    }
});



// --------- Flight Card
const container = document.querySelector('.output-cards');

flightCard.forEach((data) => {
    const flight_card = document.createElement('div');
    flight_card.classList.add('flight-card');

    flight_card.innerHTML = `
        <div class="card">
            <div class="card-responisve">
                <div class="logo">
                    <img src=${data.logo} alt="airlines logo">
                    <p>${data.name}</p>
                </div>

                <div class="card-flight-times">
                    <div class="range-container">
                        <div class="flight-regime">
                            <p>Take off</p>
                            <p>Landing</p>
                        </div>
                        <div class="flight-range">
                            <p>${data.takeOff}</p>
                            <span class="line"></span>
                            <p>${data.landing}</p>
                        </div>
                    </div>
                    <div class="flight-duration">
                        <p>${data.duration}</p>
                    </div>
                </div>
            </div>

            <div class="card-flight-price">
                <div class="money">
                    <p>Price:</p>
                    <p>${data.price}</p>
                </div>
                <button>View Deal</button>
            </div>
        </div>
    `
    container.appendChild(flight_card);
});

// ------------- Flight Search
const flight_search_btn = document.getElementById('flight-search-btn');
const output_container = document.querySelector('.output-section');
const search_container = document.querySelector('.search');

flight_search_btn.addEventListener('click', () => {
    output_container.style.display = 'flex';
    search_container.style.marginBottom = '0px';
})
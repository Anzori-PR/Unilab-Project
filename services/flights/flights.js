import { flightCard } from '../../data/home-db.js'

// ----------- User Click
const userIcon = document.getElementById('user');
const clickUserCont = document.getElementById('clickUserContainer');

userIcon.addEventListener('click', () => {
    clickUserCont.style.display = clickUserCont.style.display === 'block' ? 'none' : 'block';
});

// --------- Flight Card
const container = document.querySelector('.output-cards');

flightCard.forEach((data) => {
    const flight_card = document.createElement('div');
    flight_card.classList.add('flight-card');

    flight_card.innerHTML = `
        <div class="card">
            <div class="logo">
                <img src="../../data/images/flight-card-img/image 7.png" alt="airlines logo">
                <p>${data.name}</p>
            </div>

            <div class="card-flight-times">
                <div class="range-container">
                    <div class="flight-regime">
                        <p>Take off</p>
                        <p>Landing</p>
                    </div>
                    <div class="flight-range">
                        <p>12:00</p>
                        <span class="line"></span>
                        <p>19:00</p>
                    </div>
                </div>
                <div class="flight-duration">
                    <p>7 Hours</p>
                </div>
            </div>

            <div class="card-flight-price">
                <div class="money">
                    <p>Price</p>
                    <p>600$</p>
                </div>
                <button>View Deal</button>
            </div>
        </div>
    `
    container.appendChild(flight_card);
});
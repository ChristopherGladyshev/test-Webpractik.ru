import '../sass/style.css';
import '../sass/style.scss';
import './burger';
import {
    cardPizzaSize
} from "./card-pizza";

import {
    searchCard
} from './search';




const body = document.getElementById('body');
const header = document.querySelector('.header__wrapper');
const burgerScroll = document.querySelector('.menu-icon-wrapper');

body.addEventListener('click', (event) => {
    searchCard.searchCard(event);
    cardPizzaSize.cardPizzaSize(event);
});

window.addEventListener('scroll', () => {
    if (pageYOffset === 0) {
        header.classList.remove('scroll');
        burgerScroll.classList.remove('menu-icon-wrapper-scroll');
    } else {
        header.classList.add('scroll');
        burgerScroll.classList.add('menu-icon-wrapper-scroll');
    }
})
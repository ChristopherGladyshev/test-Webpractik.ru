import '../sass/style.css';
import '../sass/style.scss';
import './burger';
import './create-card';
import {
    cardPizzaSize
} from "./card-pizza";

import {
    searchCard
} from './search';





const body = document.getElementById('body');
const header = document.querySelector('.header__wrapper');
const burgerScroll = document.querySelector('.menu-icon-wrapper');
const modalButtonClose = document.getElementById('modalButtonClose');
const modal = document.querySelector('.modal');


body.addEventListener('click', (event) => {
    searchCard.searchCard(event);
    cardPizzaSize.cardPizzaSize(event);
    if (event.target.classList == 'closeModal' || event.target.classList == 'modal') {
        modal.classList.add('modalHiden');
    } else if (event.target.getAttribute('data-openModal')) {
        modal.classList.remove('modalHiden');
    }
    if (event.target.getAttribute('data-calculate') == "minus") {
        let price = +event.target.getAttribute('data-price-item');
        let text = event.target.parentElement.parentElement.parentElement.children[2].children[0].innerText;
        let valueInput = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].value;

        text = text.split(' ')
        if (+text[0] > 0) {
            text[0] = text[0] - price
            valueInput = +valueInput - 1;
            event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].value = valueInput;
        };
        text = text.join(" ");

        event.target.parentElement.parentElement.parentElement.children[2].children[0].innerText = text;
    } else if (event.target.getAttribute('data-calculate') == "plus") {
        let text = event.target.parentElement.parentElement.parentElement.children[2].children[0].innerText;
        let price = +event.target.getAttribute('data-price-item');
        let valueInput = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].value;

        text = text.split(' ')
        text[0] = +text[0] + price;
        text = text.join(" ");
        event.target.parentElement.parentElement.parentElement.children[2].children[0].innerText = text;

        valueInput = +valueInput + 1;
        event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].value = valueInput;
    }
    // modalButtonClose.style.display = (none
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
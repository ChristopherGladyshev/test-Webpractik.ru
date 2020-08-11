const burger = document.querySelector('.menu-icon-wrapper');
const burgerLine = document.querySelector('.menu-icon');
const navBurger = document.querySelector('.nav-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('menu-icon-wrapper-active');
    burgerLine.classList.toggle('menu-icon-active');
    navBurger.classList.toggle('nav-burger-active');
})
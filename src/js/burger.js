const burger = document.querySelector('.menu-icon-wrapper');
const burgerLine = document.querySelector('.menu-icon');

burger.addEventListener('click', () => {
    burgerLine.classList.toggle('menu-icon-active');
})
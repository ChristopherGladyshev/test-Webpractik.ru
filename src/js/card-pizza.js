const body = document.getElementById('body');



body.addEventListener('click', (event) => {
    if (event.target.parentElement.classList[0] === 'card__btn__size') {
        if (event.target.innerText === '40') {
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.remove("average")
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.add('big')

        }
        if (event.target.innerText === '30') {
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.remove("big")
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.add('average')

        }
        if (event.target.innerText === '20') {
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.remove("big")
            event.target.parentElement.parentElement.parentElement.children[0].children[0].classList.remove("average")
        }
        event.target.parentElement.children.forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
    }
});

const card__pizee = document.querySelectorAll('.card__pizee');
const sort__nav_card =document.querySelector('.sort__nav-card');

export const searchCard = {
    searchCard: function searchCard(event) {
        sort__nav_card.children.forEach(element => {
            element.children[0].classList.remove('active');
        })
        if (event.target.innerText === 'ВСЕ') {
            event.target.classList.add('active');
            card__pizee.forEach(element => {
                element.classList.remove('hidden')
            })
        } else if (event.target.innerText === 'МЯСНЫЕ') {
            event.target.classList.add('active');
            card__pizee.forEach(element => {
                if (element.getAttribute('data-sort') !== 'beaf') {
                    element.classList.add('hidden')
                }else element.classList.remove('hidden')
            });
        }else if (event.target.innerText === 'СЫРНЫЕ') {
            event.target.classList.add('active');
            card__pizee.forEach(element => {
                if (element.getAttribute('data-sort') !== 'cheese') {
                    element.classList.add('hidden')
                }else element.classList.remove('hidden')
            });
        }
        else if (event.target.innerText === 'ОСТРЫЕ') {
            event.target.classList.add('active');
            card__pizee.forEach(element => {
                if (element.getAttribute('data-sort') !== 'hot') {
                    element.classList.add('hidden')
                }else element.classList.remove('hidden')
            });
        }
        else if (event.target.innerText === 'ВЕГАНСКИЕ') {
            event.target.classList.add('active');
            card__pizee.forEach(element => {
                if (element.getAttribute('data-sort') !== 'vegetable') {
                    element.classList.add('hidden')
                }else element.classList.remove('hidden')
            });
        }
        return;
    }
}
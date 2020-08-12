import {
    data
} from './data';
const cardContainer = document.getElementById('cardContainer');

export const CreateCard = {

    CreateCard: function (data, parent) {
        let el = '';
        data.forEach(element => {
            el += ` <div class="card__pizee" data-sort="${element.dataSort}">
                                    <img class="icon__card" src="./img/${element.dataSort}.svg" alt="all">
                                    <div class="pizza__wrapper">
                                        <img class="pizza" src="./img/${element.img}" alt="pizza">
                                    </div>
                                    <div class="card__description">
                                        <h3>${element.name}</h3>
                                        <p>${element.description}</p>
                                    </div>
                                    <div class="item__container-card">
                                        <div class="container__card">
                                            <div>
                                                <p class="card__size__pizze">Размер, см:</p>
                                            </div>
                                            <div class="card__btn__size">
                                                <button class="active">20</button>
                                                <button class="btnCard">30</button>
                                                <button class="btnCard">40</button>
                                            </div>
                                        </div>
                                        <div class="price">
                                            <p>от ${element.price} руб.</p>
                                        </div>
                                        <div class="container__card">
                                            <button class="order">Заказать</button>
                                        </div>
                                    </div>
                            </div>`
        });
        parent.insertAdjacentHTML("afterbegin", el);
    }
}


CreateCard.CreateCard(data, cardContainer);
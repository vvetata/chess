//слайдер grid

let sutitle = document.querySelector('.transform__subtitle');
let title = document.querySelector('.transform__title');
let plane = document.querySelector('.transform__image');
let container = document.querySelector('.transform__items');
let cards = document.querySelectorAll('.transform__item');
let item2 = cards[1];
let port = document.querySelectorAll('.transform__item_cont');
let port1 = port[0];
let item5 = cards[4];
let port4 = port[3];
let click = nav.cloneNode(true);
let trBody = document.querySelector('.transform__body');
let btnNext = click.querySelector('.participants__button_right');
let btnPrev = click.querySelector('.participants__button_left');

//адаптация карточек
if(window.innerWidth < 1230) {
    port1.append(item2);
    port4.append(item5);
    port[4].remove();
    port[1].remove();
    trBody.after(click);
}

//адаптация хэдэра
if(window.innerWidth < 734) {
    title.append(sutitle);
}

//кнопки
btnNext.onclick = () => {
    container.scrollLeft += port1.clientWidth + 20;
}

btnPrev.onclick = () => {
    container.scrollLeft -= port1.clientWidth + 20;
}


//создание индикаторов
let indicators = document.createElement('ul');
indicators.classList.add('indicators');
let counterBody = document.querySelector('.counter');
counterBody.replaceWith(indicators);
let indicator1 = document.createElement('li');
indicators.append(indicator1);
let indicator2 = document.createElement('li');
indicators.append(indicator2);
let indicator3 = document.createElement('li');
indicators.append(indicator3);
let indicator4 = document.createElement('li');
indicators.append(indicator4);
let indicator5 = document.createElement('li');
indicators.append(indicator5);

let lis = indicators.getElementsByTagName('li');
for (li of lis) {
    li.classList.add('indicator');
}

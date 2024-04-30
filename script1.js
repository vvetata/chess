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


//адаптация карточек
if(window.innerWidth <= 1230) {
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



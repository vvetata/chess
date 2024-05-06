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
}

//адаптация хэдэра
if(window.innerWidth < 734) {
    title.append(sutitle);
}

// для слайдера

let btnPrew = document.querySelector('.nav-transform__button_prew');
let btnNext = document.querySelector('.nav-transform__button_next');
let itemsGrid = document.querySelector('.transform__items');
let itemGrid = document.querySelector('.transform__item');
let indicators = document.querySelectorAll('.nav-transform__indicator');
let indIndex = 0;
let position = 0;

/*if(window.innerWidth < 1230) {



btnNext.onclick = () => {
    itemsGrid.scrollLeft += itemGrid.clientWidth + 60;
    thisSlide(indIndex);
    indIndex++;
}
btnPrew.onclick = () => {
    itemsGrid.scrollLeft -= itemGrid.clientWidth + 60;
    thisSlide(indIndex);
    indIndex--;
}

}

let thisSlide = (index) => {
    for (let ind of indicators) {
        ind.classList.remove('nav-transform__indicators_active');
    }
    indicators[index].classList.add('nav-transform__indicators_active');
}

// индикаторы



indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => {
        itemsGrid.scrollLeft = (itemGrid.clientWidth + 60) * index;
        indIndex = index;
        thisSlide(indIndex);
    })

})



/*
let indicator1 = document.querySelector('.nav-transform__indicator_1');
let indicator2 = document.querySelector('.nav-transform__indicator_2');
let indicator3 = document.querySelector('.nav-transform__indicator_3');
let indicator4 = document.querySelector('.nav-transform__indicator_4');
let indicator5 = document.querySelector('.nav-transform__indicator_5');
let svg1 = indicator1.firstElementChild;

indicator1.onclick = () => {
    itemsGrid.scrollLeft = 0;
    indicator1.style.color = '#313131';
    indicator2.style.color = '#D9D9D9';
    indicator3.style.color = '#D9D9D9';
    indicator4.style.color = '#D9D9D9';
    indicator5.style.color = '#D9D9D9';
}
indicator2.onclick = () => {
    itemsGrid.scrollLeft = itemGrid.clientWidth + 60;
    indicator2.style.color = '#313131';
    indicator1.style.color = '#D9D9D9';
    indicator3.style.color = '#D9D9D9';
    indicator4.style.color = '#D9D9D9';
    indicator5.style.color = '#D9D9D9';
}
indicator3.onclick = () => {
    itemsGrid.scrollLeft = (itemGrid.clientWidth + 60) * 2;
    indicator3.style.color = '#313131';
    indicator2.style.color = '#D9D9D9';
    indicator1.style.color = '#D9D9D9';
    indicator4.style.color = '#D9D9D9';
    indicator5.style.color = '#D9D9D9';
}
indicator4.onclick = () => {
    itemsGrid.scrollLeft = (itemGrid.clientWidth + 60) * 3;
    indicator4.style.color = '#313131';
    indicator2.style.color = '#D9D9D9';
    indicator3.style.color = '#D9D9D9';
    indicator1.style.color = '#D9D9D9';
    indicator5.style.color = '#D9D9D9';
}
indicator5.onclick = () => {
    itemsGrid.scrollLeft = (itemGrid.clientWidth + 60) * 4;
    indicator5.style.color = '#313131';
    indicator2.style.color = '#D9D9D9';
    indicator3.style.color = '#D9D9D9';
    indicator4.style.color = '#D9D9D9';
    indicator1.style.color = '#D9D9D9';
}
*/

const nextSlide = () => {
    position = 537;
    itemsGrid.style.left = -position + 'px';
}

btnNext.addEventListener('click', nextSlide);
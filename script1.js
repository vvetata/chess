//слайдер grid

let subtitle = document.querySelector('.transform__subtitle');
let title = document.querySelector('.transform__title');
let container = document.querySelector('.transform__items');

let content = document.querySelectorAll('.transform__content');
let content2 = content[1];
let slide = document.querySelectorAll('.transform__item');
let slide1 = slide[0];
let content5 = content[4];
let slide4 = slide[3];


//адаптация карточек
if(window.innerWidth <= 1230) {
    slide1.append(content2);
    slide4.append(content5);
    slide[4].remove();
    slide[1].remove();
}

//адаптация хэдэра
if(window.innerWidth < 734) {
    title.append(subtitle);
}

//адаптация padding у transform__content
content[1].style.paddingTop = '28px';
content[4].style.paddingTop = '28px';

// для слайдера

let btnPrew = document.querySelector('.nav-transform__button_prew');
let btnNext = document.querySelector('.nav-transform__button_next');
let itemsGrid = document.querySelector('.transform__items');
let itemGrid = document.querySelector('.transform__item');
let indicators = document.querySelectorAll('.nav-transform__indicator');
let indIndex = 0;
let position = 0;

if(window.innerWidth < 1230) {



btnNext.onclick = () => {
    itemsGrid.scrollLeft += itemGrid.clientWidth + 21;
    if (indIndex >= indicators.length-1) {
        indIndex = indIndex;
    } else {
        indIndex++;
    }
    thisSlide(indIndex);
    isNotActive();
}
btnPrew.onclick = () => {
    itemsGrid.scrollLeft -= itemGrid.clientWidth + 20;
    if (indIndex < 1) {
        return;        
    } 
    else{
        indIndex--;
    }
    thisSlide(indIndex);
    isNotActive();
}



// индикаторы

/*РАБОТАЕТ */
indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => {
        itemsGrid.scrollLeft = (itemGrid.clientWidth + 21) * index;
        indIndex = index;
        thisSlide(indIndex);
        isNotActive();
    })
    })



let thisSlide = (index) => {
    for (let ind of indicators) {
        ind.classList.remove('nav-transform__indicators_active');
    }
    indicators[index].classList.add('nav-transform__indicators_active');
}

let isNotActive = () => {
if (indicators[0].classList.contains('nav-transform__indicators_active')) {
    btnPrew.style.backgroundColor = '#D9D9D9';
} else if (indicators[indicators.length - 1].classList.contains('nav-transform__indicators_active')) {
    btnNext.style.backgroundColor = '#D9D9D9';
} else {
    btnPrew.style.backgroundColor = '#313131';
    btnNext.style.backgroundColor = '#313131';
}

}
}


/*
const nextSlide = () => {
    position = 537;
    itemsGrid.style.left = -position + 'px';
}

btnNext.addEventListener('click', nextSlide);*/
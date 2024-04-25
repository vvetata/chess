let sutitle = document.querySelector('.transform__subtitle');
let title = document.querySelector('.transform__title');
let plane = document.querySelector('.transform__image');
let num1 = document.querySelector('.transform__item');
let num2 = document.querySelector('.transform__item_2');


if(window.innerWidth < 734) {
    title.append(sutitle);
    num1.append(num2);
}
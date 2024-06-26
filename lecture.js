let lectureP = document.querySelector('.lecture__p');
let lectureImg = document.querySelector('.lecture__image');

if (window.innerWidth < 376) {
    lectureP.after(lectureImg);
}

let logo = document.querySelector('.logo-header__image_img');
if (window.innerWidth < 376) {
    logo.removeAttribute('src');
    logo.setAttribute('src', 'images/header/02.svg')
}
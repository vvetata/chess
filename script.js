let btnLeft = document.querySelector('.participants__button_left');
let btnRight = document.querySelector('.participants__button_right');
let items = document.querySelectorAll('.participants__column');
let carousel = document.querySelector('.carousel');
let body = document.querySelector('.participants__body');
let col = document.querySelector('.participants__column');
let item = document.querySelector('.participants__item');
let nav = document.querySelector('.participants__nav');

let counter = document.querySelector('.counter-change');
let num = Number(counter.textContent);

btnRight.onclick = () => {
  body.scrollLeft += 414;
  if (num >= 3 && num < 6) {
  num += 1;
  counter.textContent = num;  
  }      
};
btnLeft.onclick = () => {
  body.scrollLeft -= 414;
  if (num > 3 && num <= 6) {
    num -= 1;
    counter.textContent = num;  
    }    
};


if(window.innerWidth < 1230) {
  body.after(nav);
  counter.textContent = 1;
  num = 1;
  btnRight.onclick = () => {
    body.scrollLeft += (item.clientWidth+20);
    if (num >= 1 && num < 6) {
      num += 1;
      counter.textContent = num;  
      }    
  };
btnLeft.onclick = () => {
    body.scrollLeft -= (item.clientWidth+20);
    if (num > 1 && num <= 6) {
      num -= 1;
      counter.textContent = num;  
      }    
  };
}



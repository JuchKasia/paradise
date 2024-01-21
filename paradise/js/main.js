const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');

const handle = () => {
    nav.classList.toggle('nav--active');
}

burgerBtn.addEventListener('click', handle);
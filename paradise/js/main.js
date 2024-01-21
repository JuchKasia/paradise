const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');


const handle = () => {
    nav.classList.toggle('nav--active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        })
    })
}

burgerBtn.addEventListener('click', handle);

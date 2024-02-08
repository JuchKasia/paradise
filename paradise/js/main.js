const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');




const handleNav = () => {
    nav.classList.toggle('nav--active');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        })
    })
    handleNavItemsAnimation();
}


const handleNavItemsAnimation = () => {
    let delayTime = 0;

    navItems.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

burgerBtn.addEventListener('click', handleNav);


/// reviews carousel
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.querySelectorAll('.reviews__box');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

//   change color of nav btns`, when use scroll
const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color');
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color');
        }
    })
}
window.addEventListener('scroll', handleObserver)


// change current year
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
// handleObserver()
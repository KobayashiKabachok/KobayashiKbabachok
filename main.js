const MENU_LINKS = document.querySelectorAll('.heaeder__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
event.preventDefault();

document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'

})
}))



const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');

HERO_DOTS.forEach(dot, index) => dot.addEventListener('click', event => {

    HERO_DOTS.forEach(el => {
        el.classList.remove('active')
    })

    dot.classList.add('active')

    HERO_IMAGE.src = 'assets/hero_${index + 1}.jpg'
    HERO_TITLE.textContent = HERO_TITLE
})
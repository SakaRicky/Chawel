const toggleButton = document.querySelector('.toggle__menu');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.mobile__nav');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
    header.classList.toggle('open');
    if (header.classList.contains('open')) {
        overlay.style.opacity= "0.4"
        overlay.style.visibility= 'visible';
        mobileNav.style.left = "50%"

    } else {
        mobileNav.style.left = "190%"
        overlay.style.opacity= "0";
        overlay.style.visibility= "hidden"
    }
})

overlay.addEventListener('click', () => {
    header.classList.remove('open');
    overlay.style.opacity= "0"
    overlay.style.visibility= 'hidden';
    mobileNav.style.left = "150%"
})
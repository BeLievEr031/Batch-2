const menuBtn = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const mobileNav = document.querySelector('.mobile-items')
let isopen = false;
menuBtn.addEventListener('click', function () {

    if (isopen === false) {
        menuIcon.style.display = 'none'
        closeIcon.style.display = 'block'
        isopen = true;
        mobileNav.classList.add('sliding')
    } else {
        menuIcon.style.display = 'block'
        closeIcon.style.display = 'none'
        isopen = false;
        mobileNav.classList.remove('sliding')

    }

    // isopen = !isopen;

})
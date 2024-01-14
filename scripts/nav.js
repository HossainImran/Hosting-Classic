const toggleBtn = document.querySelector('.toggle__btn')
const mobileNav = document.querySelector('.mobile__nav')


toggleBtn.addEventListener('click',() => {
    mobileNav.classList.toggle('active')
})

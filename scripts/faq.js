const showBtn = document.querySelectorAll('.faq__btn')
const bottomSec = document.querySelector('.bottom__section')

for (let i = 0; i < showBtn.length; i++) {

    if(showBtn[i].innerHTML == '-') {
        showBtn[i].addEventListener('click' ,() => {

            showBtn[i].parentElement.parentElement.children[1].classList.toggle('block')
            showBtn[i].classList.toggle('rotate')
        })
    }
}

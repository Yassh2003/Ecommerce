const hamBurgerOpen = document.getElementById("bar");
const hamBurgerClose = document.getElementById("close");
const navbar = document.getElementById("navbar");

hamBurgerOpen.addEventListener('click',() => {
    navbar.style.right = 0 ;
})

hamBurgerClose.addEventListener('click',() => {
    navbar.style.right = "-300px" ;
})


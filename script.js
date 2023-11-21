// nav - bar

const hamBurgerOpen = document.getElementById("bar");
const hamBurgerClose = document.getElementById("close");
const navbar = document.getElementById("navbar");

hamBurgerOpen.addEventListener('click',() => {
    navbar.style.right = 0 ;
})

hamBurgerClose.addEventListener('click',() => {
    navbar.style.right = "-300px" ;
})

// sproduct

var smallImg = document.getElementsByClassName("small-img");
var MainImg = document.getElementById("MainImg");

smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
    smallImg[0].style.border = "2px solid #088178";
    smallImg[1].style.border = "none";
    smallImg[2].style.border = "none";
    smallImg[3].style.border = "none";
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
    smallImg[0].style.border = "none";
    smallImg[1].style.border = "2px solid #088178";
    smallImg[2].style.border = "none";
    smallImg[3].style.border = "none";
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
    smallImg[0].style.border = "none";
    smallImg[1].style.border = "none";
    smallImg[2].style.border = "2px solid #088178";
    smallImg[3].style.border = "none";
}
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
    smallImg[0].style.border = "none";
    smallImg[1].style.border = "none";
    smallImg[2].style.border = "none";
    smallImg[3].style.border = "2px solid #088178";
}

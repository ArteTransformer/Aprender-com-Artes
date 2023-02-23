// comando para o slide funcionar
let slideIndex = 0;
showSlides();

function showSlides() {

    let i = null;
    
    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {

     slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex> slides.length) {slideIndex = 1}   

    for (i=0;i< dots.length;i++) {

        dots[i].className=dots[i].className.replace(" active", "");
    }

     slides[slideIndex-1].style.display = "block";

     dots[slideIndex-1].className += " active";
     
     setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Menu Hamburguer
    let menu_icon = document.querySelector('#menu_icon');

    let container = document.querySelector("#container");
    
    let drawer = document.querySelector('#drawer');

    menu_icon.addEventListener('click', function (e) {
    
    drawer.classList.toggle('open');
  
    e.stopPropagation();

});

    container.addEventListener('click', function () {

    drawer.classList.remove('open');

    });
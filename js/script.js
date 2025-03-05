// scripts.js
window.onscroll = function() {
    toggleNavbarBackground();
};

function toggleNavbarBackground() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Change 50 to your desired scroll point
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}


$(document).ready(function () {
    $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [1000, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: false ,
    loop: false,
    delay : 300});
    
    });


// let message = document.querySelector('.text-message');
// let mouth = document.querySelector('.mouth');
// let text = 'Hi We are from Robtics and AI Engineering!';
// const speak = ()=>{
//   mouth.style.animationPlayState = 'running';
//   message.textContent = "";
//   for(let i = 0;i< text.length; i++){
//     setTimeout(()=>{
//       message.textContent += text[i];
//     },i*100);
//     if(i == text.length -1){
//       setTimeout(()=>{
//         mouth.style.animationPlayState = 'paused';
//       },i*100)
//     }
//   }

// }
// speak();
// setInterval(speak,7000);
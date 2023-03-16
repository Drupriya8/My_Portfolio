// $(document).ready(function(){
// // $('.slider').slick({
// //     arrows:false,
// //     dots:true,
// //     appendDots:'.slider-dots',
// //     dotsClass:'dots'
// // });


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let cross1 = document.querySelector('.cross1');
let cross2 = document.querySelector('.cross2');
let cross3 = document.querySelector('.cross3');
let cross4 = document.querySelector('.cross4');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

cross1.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});
cross2.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});
cross3.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});
cross4.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

// });
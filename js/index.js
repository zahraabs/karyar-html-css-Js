'use strict';
const swiper = new Swiper('.swiper__header', {
    loop: true,
      slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
        },
    });

    const swiperBusiness = new Swiper('.business-slider', {
    loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   
   
    });

    const toggler=document.querySelector(".nav__toggler");
const nav=document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
console.log("clicked");
nav.classList.toggle("expand");
// toggler.classList.toggle("none");
})

let timer = document.querySelector('.timer');
if(timer.length) {
    timer.appear(function () {
      timer.countTo();
  });
}
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

const ownerImgs = document.querySelectorAll('.owner-top div img')
const decs = document.querySelectorAll('.owner--desc .owner--desc-inner')


decs.forEach(dec => {
  dec.style.display = 'none'
  if (dec.dataset.select === 'first') {
    dec.style.display = 'block'
  }
})

ownerImgs.forEach(img => img.addEventListener('click', function () {
  ownerImgs.forEach(img => img.classList.remove('clicked'))
  this.classList.add('clicked')
  const selectedImgDataset = this.dataset.select

  decs.forEach(dec => {
    dec.style.display = 'none'
    if (dec.dataset.select === selectedImgDataset) {
      dec.style.display = 'block'
    }
  })

}))


const projectCounter = document.querySelector('.project-counter')
let projectCounterContent = 10

window.addEventListener('scroll', function () {
  if (window.scrollY > projectCounter.offsetTop - (window.innerHeight)) {

    setInterval(() => {
      projectCounterContent += 1
    }, 100)

    projectCounter.innerHTML = projectCounterContent
  }
})
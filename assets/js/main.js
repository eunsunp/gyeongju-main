// nav mobile device //
$('.xi-bars').click(function(){
    $('.nav-menu').slideToggle();
});

const bg=document.querySelector('.section01');
window.addEventListener('scroll', ()=>{
    bg.style.backgroundSize =160 +window.pageYOffset/12+'%';
    bg.style.opacity =1 - +window.pageYOffset/1000+'';
})



// section02 tabs //
$(function() {
    $( "#tabs" ).tabs();
});

// section02 swiper //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  AOS.init();


// section04 gallery//
$('.img-1').click(function(){
  $('.img01').fadeIn();
})

$('.img-2').click(function(){
  $('.img02').fadeIn();
})

$('.img-3').click(function(){
  $('.img03').fadeIn();
})

$('.img-4').click(function(){
  $('.img04').fadeIn();
})

$('.img-5').click(function(){
  $('.img05').fadeIn();
})

$('.img-6').click(function(){
  $('.img06').fadeIn();
})

$('.xi-close-circle-o').click(function(){
  $('.full-img').fadeOut();
})


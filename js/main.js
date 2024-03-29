// carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  startPosition: 1,
  items: 3,
  responsive : {
    450 : {
      margin: 10,
    },
    890 : {
      items: 3,
      margin: 20,
    },
    1000 : {
      margin: 20,
      items: 3,
    },
    1200 : {
      margin: 30,
    }
}
});


$('.slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});



// header burger-menu
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon--active');
  document.body.classList.toggle('no-scroll');
}


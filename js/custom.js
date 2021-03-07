// swiper
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    loop: true,
    slidesPerView: 3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  
// swiper end
// menu
function closeMenu() {
  document.querySelector('#toggler').click();
}
// menu end

// animate
function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  // console.log(bounding);
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.top + bounding.height / 2 <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function checkItems() {
  let items = document.querySelectorAll('.animate');

  items.forEach(item => {
      if (isInViewport(item)) {
          let animateMode = item.getAttribute('data-animate'),
              delay = item.getAttribute('data-delay');
          item.classList.add('animate__animated', 'animate__' + animateMode);
          if (delay) {
              item.classList.add(`animate__delay-${delay}s`);
          }
          item.classList.remove('animate');
      }
  })

}

checkItems();

window.addEventListener('scroll', function(e) {
  checkItems();
})
// animate end
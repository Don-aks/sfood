const header = document.querySelector(".header__wrapper");

window.addEventListener("scroll", function(){
  const className = "header__wrapper--fixed";
  if (this.scrollY > 0)
    header.classList.add(className);
  else
    header.classList.remove(className);
});

const menuBtn = document.querySelectorAll(".menu__btn");
const menu = document.querySelector(".menu--mobile");
const body = document.querySelector("body");

body.addEventListener("click", function(e) {
  for(let i = 0; i < menuBtn.length; i++) {
    if (e.target === menuBtn[i]) {
      body.classList.toggle("locked");
      menu.classList.toggle("menu--active");
      return;
    }
  }

  body.classList.remove("locked");
  menu.classList.remove("menu--active");
});

const tabsWrap = document.querySelector(".tabs");

tabsWrap.addEventListener("click", function(e){
  let targetTab;
  if (e.target.tagName === "use")
    targetTab = e.target.parentNode.parentNode;
  else if (e.target.tagName === "svg")
    targetTab = e.target.parentNode;
  else if (e.target.tagName === "BUTTON")
    targetTab = e.target;
  else
    return;

  let activeClass = "tabs__tab--active";
  tabsWrap.querySelector("." + activeClass).classList.remove(activeClass);
  targetTab.classList.add(activeClass);

  activeClass = "products__list--active";
  document.querySelector("." + activeClass).classList.remove(activeClass);

  const listTarget = document.querySelector(
    ".products__list[data-tab=\"" + targetTab.dataset.tab + "\"]"
  );
  if (listTarget)
    listTarget.classList.add(activeClass);
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  navigation: {
    nextEl: ".reviews-slider__btn--next",
    prevEl: ".reviews-slider__btn--prev",
  },
  a11y: {
    prevSlideMessage: "Попередній слайд",
    nextSlideMessage: "Наступний слайд"
  },
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    320: {
      pagination: {
        el: null,
        enabled: false
      }
    },

    560: {
      pagination: {
        el: ".reviews-slider__pagination",
        type: "bullets",
        clickable: true
      }
    }
  }
});

var restaurantsSwiper;
loadRestaurantsSwiper();
window.addEventListener("resize", debounce(loadRestaurantsSwiper));

function loadRestaurantsSwiper() {
  if (window.innerWidth <= 768) {
    if (document.querySelector(".restaurants__swiper-wrap.swiper-initialized"))
      return;

    restaurantsSwiper = new Swiper(".restaurants__swiper-wrap", {
      pagination: {
        el: ".restaurants__swiper-pagination",
        type: "bullets",
        clickable: true
      }
    });
  } else if (document.querySelector(".restaurants__swiper-wrap.swiper-initialized"))
    restaurantsSwiper.destroy();
}

function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,100,event);
  };
}

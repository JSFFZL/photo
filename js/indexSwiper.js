
var item1 = document.querySelector(".item1");
var logo = document.querySelector(".logo");
var logoImg = document.querySelector(".logo img");
var lis = document.querySelectorAll(".item1 ul li");
// var

// (function(){
//     logo.classList.add("bounceInDown");
//     lis.forEach(function(item){
//         item.classList.add("fadeIn");
//     });
//     logoImg.classList.add("flash");
// })()



var wrapper = new Swiper(".banner", {
    direction: "vertical",
    initialSlide: 2,
    pagination: {
        el: ".swiper-pagination"
    },
    on: {
        init: function () {
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this);
            // this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
        }
    }
})

var banner = new Swiper(".ad", {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    }
})
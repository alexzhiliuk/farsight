import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const casesSwiper = new Swiper('#casesSwiper', {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 8,
    // pagination: {
    //     el: '#casesSwiperPagination',
    // },
    navigation: {
        nextEl: '#casesSwiperNext',
        prevEl: '#casesSwiperPrev',
    },
    on: {
        init: function () {
            updateCounter(this);
            updateProgress(this);
        },
        slideChange: function () {
            updateCounter(this);
            updateProgress(this);
        },
    },
    
})

function updateCounter(swiperInstance) {
  const current = swiperInstance.activeIndex + 1;
  const total = swiperInstance.slides.length;
  $('#casesSwiperCounter').html(`<span class='_current'>${current}</span>/<span class='_total'>${total}</span>`);
}

function updateProgress(swiperInstance) {
  const current = swiperInstance.activeIndex;
  const total = swiperInstance.slides.length;
  $('#casesSwiperProgress').css("--total", `${total}`).css("--step", `${current}`)
}

function moveCounter() {
    if (window.outerWidth <= 576) {
        $(".swiper-counter").each(function(i, el) {
            const navPrev = $(el).parent().find(".swiper-navigation-prev")
            $(el).insertAfter(navPrev)
        })
        return
    }

    $(".swiper-counter").each(function(i, el) {
        if (!$(el).parent().hasClass("swiper-navigation")) {
            return
        }
        $(el).parent().parent().prepend(el)
    })

}

moveCounter()
$(window).resize(function() {
    moveCounter()
})
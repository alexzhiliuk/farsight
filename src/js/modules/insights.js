import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const insightsSwiper = new Swiper('#insightsSwiper', {
    modules: swiperModules,
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
        nextEl: '#insightsSwiperNext',
        prevEl: '#insightsSwiperPrev',
    },
    breakpoints: {
        992: {
            slidesPerView: 2.2,
        }
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
    
    const slidesPerView = Math.floor(swiperInstance.params.slidesPerView) || 1;
    const totalSlides = swiperInstance.slides.length;
    
    const totalGroups = totalSlides - (slidesPerView - 1);
    
    let currentGroup = swiperInstance.activeIndex + 1;
    
    $('#insightsSwiperCounter').html(`
        <span class='_current'>${currentGroup}</span>/<span class='_total'>${totalGroups}</span>
    `);
}


function updateProgress(swiperInstance) {
    const slidesPerView = Math.floor(swiperInstance.params.slidesPerView) || 1;
    const totalSlides = swiperInstance.slides.length;
    
    const totalGroups = totalSlides - (slidesPerView - 1);
    
    let currentGroup = swiperInstance.activeIndex;
    $('#insightsSwiperProgress').css("--total", `${totalGroups}`).css("--step", `${currentGroup}`)
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
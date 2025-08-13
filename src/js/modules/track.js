import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const trackSwiper = new Swiper('#trackSwiper', {
    modules: swiperModules,
    slidesPerView: 1.2,
    spaceBetween: 20,
    on: {
        init: function () {
            updateCounter(this);
        },
        slideChange: function () {
            updateCounter(this);
        },
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    
})

function updateCounter(swiperInstance) {
    
    const slidesPerView = Math.floor(swiperInstance.params.slidesPerView) || 1;
    const totalSlides = swiperInstance.slides.length;
    
    const totalGroups = totalSlides - (slidesPerView - 1);
    
    let currentGroup = swiperInstance.activeIndex + 1;
    
    $('#trackSwiperCounter').html(`
        <span class='_current'>${currentGroup}</span>/<span class='_total'>${totalGroups}</span>
    `);
}



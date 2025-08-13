import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const reputationSwiper = new Swiper('#repSwiper', {
    modules: swiperModules,
    slidesPerView: "auto",
    spaceBetween: 15,
    on: {
        init: function () {
            updateCounter(this);
        },
        slideChange: function () {
            updateCounter(this);
        },
    },
    
})

function updateCounter(swiperInstance) {
    
    const slidesPerView = Math.floor(swiperInstance.params.slidesPerView) || 1;
    const totalSlides = swiperInstance.slides.length;
    
    const totalGroups = totalSlides - (slidesPerView - 1);
    
    let currentGroup = swiperInstance.activeIndex + 1;
    
    $('#repSwiperCounter').html(`
        <span class='_current'>${currentGroup}</span>/<span class='_total'>${totalGroups}</span>
    `);
}



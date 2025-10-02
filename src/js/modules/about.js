import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const aboutSwiper = new Swiper('#aboutSwiper', {
    modules: swiperModules,

    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 17000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 15,
})

const teamSwiper = new Swiper('#teamSwiper', {
    modules: swiperModules,

    slidesPerView: 1,
    spaceBetween: 20,

    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    // },

    pagination: {
        el: "#teamSwiperPagination",
        clickable: true
    },

    breakpoints: {
        576: {
            slidesPerView: "auto",
        },
    }
})




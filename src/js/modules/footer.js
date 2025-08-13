import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const footerSwiper = new Swiper('#footerSwiper', {
    modules: swiperModules,

    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 9000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 15,
})




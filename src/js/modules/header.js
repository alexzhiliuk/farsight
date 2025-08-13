$(".header__menu li").each(function (i, li) { 
    $(".mobile-menu__list").append($(li).clone())
})

$(".header__burger").click(function() {
    let topPadding = $(".header__logo").position().top
    $('.mobile-menu').css("padding-top", topPadding + "px")
    $('.mobile-menu').addClass("_active")

    $("html, body").addClass("lock")
})
$(".mobile-menu__close").click(function() {
    $('.mobile-menu').removeClass("_active")
    $("html, body").removeClass("lock")
})

$(window).scroll(function(event){

    var st = $(this).scrollTop();
    if (st > 100){
        $(".header").addClass("header_scrolled")

        if ($(".header").hasClass("header_black")) {
            $(".header").removeClass("header_black")
            $(".header").addClass("header_was-black")
        }
    } else {
        $(".header").removeClass("header_scrolled")
        if ($(".header").hasClass("header_was-black")) {
            $(".header").addClass("header_black")
        }
    }

});
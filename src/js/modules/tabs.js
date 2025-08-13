$(".tabs__controller").click(function() {
    const tabId = $(this).data("tab")
    $(this).siblings().removeClass("_active")
    $(this).addClass("_active")
    $(this).parents(".tabs").find(`.tab`).hide()
    $(this).parents(".tabs").find(`.tab[data-tab='${tabId}']`).show()
})
$("#inicio").click(()=>{
    $("html").animate({
        scrollTop:"0"
    })
})
if($(window).width() >= 1000){
    $("#seccion1").click(()=>{
        $("html").animate({
            scrollTop:"452"
        })
    })
    $("#seccion1-1").click(()=>{
        $("html").animate({
            scrollTop:"1196"
        })
    })
    $("#seccion2").click(()=>{
        $("html").animate({
            scrollTop:"1529"
        })
    })
    $("#seccion3").click(()=>{
        $("html").animate({
            scrollTop:"1781"
        })
    })
}


if($(window).width() < 1000){
    $(".nav").css({
        "display":"none"
    })
    $("header").css({
        "paddingBottom":"10px"
    })
}
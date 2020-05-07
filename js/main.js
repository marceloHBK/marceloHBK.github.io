$(".sectionOne h2").eq(0).css({
    "position": "relative",
    "right": "-300px",
    "opacity":"0"
})
$(".sectionOne h2").eq(0).animate({
    "position": "relative",
    "right": "0px",
    "opacity":"1"
},2000)

$(".card").each(function(a){
    $(this).css({
        "opacity": "0"
    })
    $(this).animate({
        "opacity": "1"
    },2000+(a*500))
})

if($(window).width() >= 1000){
    $(".women").css({
        "position": "relative",
        "right": "-300px",
        "opacity":"0"
    })
    $(".man").css({
        "position": "relative",
        "left": "-300px",
        "opacity":"0"
    })
    $(".sectionThree").css({
        "position":"relative",
        "opacity":"0",
        "left": "-300px"
    })
    $(".xl,.l,.m").css({
        "position":"relative",
        "top":"-80px",
        "opacity":"0"
    })
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1212){
            $(".women").animate({
                "position": "relative",
                "right": "0px",
                "opacity":"1"
            },2000)
            $(".man").animate({
                "position": "relative",
                "left": "0px",
                "opacity":"1"
            },2000)
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop() >= 742){
            $(".sectionThree").animate({
                "opacity":"1",
                "left": "0px"
            },3000)
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop() >= 606){
            $(".xl").animate({
                "top":"0",
                "opacity":"1"
            },1000)
            $(".l").animate({
                "top":"0",
                "opacity":"1"
            },2000)
            $(".m").animate({
                "top":"0",
                "opacity":"1"
            },3000)
        }
    })
}
$("#top").click(function(){
    $("html").animate({
        scrollTop:"0"
    },300)
})
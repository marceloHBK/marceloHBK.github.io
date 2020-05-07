//HEADER
$(".menu  a").each(function(a){
    $(this).css({
        'top':"-100px"
    });
    $(this).animate({
        top:"0px"
    },800+(a*500));
});

$('.logo-video .text h1').css({
    opacity: "0",
    'position': "relative",
    left: "-300px"
});
$('.logo-video .text h1').animate({
    opacity: "1",
    left: "0px"
},2000);
$('.logo-video .text p').css({
    opacity: "0",
    'position': "relative",
    left: "-300px"
});
$('.logo-video .text p').animate({
    opacity: "1",
    left: "0px"
},3000);
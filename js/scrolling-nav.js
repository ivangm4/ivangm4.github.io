$(document).ready(function(){
    $(".image").mouseenter(function() {
        $(".galleryTitle", this).stop().animate({ top:'0px' }, 300);
    });
    $(".image").mouseleave(function() {
        $(".galleryTitle", this).stop().animate({ top:'240px' }, 300);
    });

    $(".image").click(function() {
        $('.scroll-top-wrapper').removeClass('show');
        $(".galleryTitle", this).animate({ top:'240px' }, 0);
        var image = $("img", this).attr("src");
        var title = $("img", this).attr("title");

        $(".about-section .container").append('<div class="window"></div>');
        $(".about-section .container").append('<div class="description"><div class="bigTitle">' + title + '</div><img class="bigImage" src="'+ image +'"/></div>');
        $(".about-section .container").append('<img class="closeWindow" src="img/close.png"/>');
        $(".about-section .container").append('<img class="expandWindow" src="img/expand.png"/>');

        $(".expandWindow").click(function() {
            $('.scroll-top-wrapper').removeClass('show');
            $(".expandWindow").remove();
            $(".about-section .container").animate({
                position : "absolute",
                top : "50%",
                left: 0
            });
            $(".description").animate({
                position : "absolute",
                top : '100%',
                left: 0,
                width: "100%",
                height: "100%"
            }, 200, function() {
                $(".bigImage").animate({
                    position : "absolute",
                    top : 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                });
                $(".bigTitle").animate({
                    position : "absolute",
                    top : "90%",
                    left: 0,
                    width: "100%",
                    height: "10%",
                    opacity : 0.4,
                    "font-size" : "24px",
                    "line-height" : "80px"
                });
                $(".closeWindow").animate({
                    position : "absolute",
                    "z-index" : 10,
                    height : "60px",
                    width : "60px",
                    top : "106%",
                    left: "94%",
                    opacity : 0.4
                });
            });
        });

        $(".closeWindow").click(function() {
            $('.scroll-top-wrapper').addClass('show');
            $(".window").remove();
            $(".closeWindow").remove();
            $(".expandWindow").remove();
            $(".description").remove();
            $(".bigTitle").remove();
            $(".bigImage").remove();
        });
    });
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(function(){
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
 
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 1000, 'linear');
}
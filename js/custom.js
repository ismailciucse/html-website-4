/*======================================
            Portfolio
========================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*======================================
            Portfolio
========================================*/
$(function () {
    new WOW().init();
});

/*======================================
            Portfolio
========================================*/
$(document).ready(function () {
    $('.portfolio-view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================
            Navigation
========================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("site-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250);
    });
});

// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

/*======================================
            Static Number
========================================*/

/*---------------------------------------------*
 static number
 ---------------------------------------------*/

$('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
});
$('.statistic').counterUp({
    delay: 10,
    time: 2000
});




// static number and progress

(function () {
    "use strict";

    $(document).ready(function () {
        /*-----------------------
        [1. Demo-1 JS] only this jQuery code not include any file
        --------------------------*/
        $('#next').click(function () {
            var $next = $('.current-progress ul li.current').removeClass('current').addClass('complete').next('li');
            if ($next.length) {
                $next.removeClass('complete').addClass('current');
                //console.log('Prev');
            } else {
                $(".current-progress ul li:first").removeClass('complete').addClass('current');
                if (".current-progress ul li:last") {
                    $('.current-progress ul li').removeClass('current').removeClass('complete').removeAttr('class');
                    $(".current-progress ul li:first").addClass('current');
                }
                //console.log('Next');
            }
        });
        $('#prev').click(function () {
            var $prev = $('.current-progress ul li.current').removeClass('current').removeClass('complete').removeAttr('class').prev('li');
            if ($prev.length) {
                $prev.removeClass('complete').addClass('current');
                //console.log('Prev');
            } else {
                $(".current-progress ul li:first").removeClass('complete').addClass('current');
                $(".current-progress ul li:last").removeClass('current').removeClass('complete').removeAttr('class');
                //console.log('Prev');
            }
        });
        /*-----------------------
        [2. Demo-2 JS] only this jQuery code not include any file
        --------------------------*/
        var div_top = $('body').offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > div_top) {
                $('.pro-width').each(function () {
                    $(this).find('.pro-dev').animate({
                        width: $(this).attr('data-percent'),
                    }, 2000, function () {});
                });
            }
        });
        /*-----------------------
        [3. Demo-3 JS] progressBar js active
        --------------------------*/
        $('.demo').progressBar({
            shadow: true,
            percentage: true,
            animation: true,
            animateTarget: true,
            barColor: "#313D53",
            // // height of the progress bar
            height: "20",
            // // background color
            backgroundColor: "#23C6EC",
            // // progress bar color
            // barColor : "#F97352",
            // // target bar color
            // targetBarColor : "#CCC",
            // // display percentage
            // percentage : true,
            // // enable shadow
            // shadow : false,
            // // enable border
            // border : false,
            // // enable animation
            // animation : false,
            // // animate target bar
            // animateTarget : false,

        });
        /*-----------------------
        [4. Demo-4 JS] This code and inview js active
        --------------------------*/
        $('.progress-bar4').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                // element 
                jQuery('.progress-bar4').each(function () {
                    jQuery(this).find('.progress-content').animate({
                        width: jQuery(this).attr('data-percentage')
                    }, 2000);

                    jQuery(this).find('.progress-number-mark').animate({
                        left: jQuery(this).attr('data-percentage')
                    }, {
                        duration: 2000,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            jQuery(this).find('.percent').html(data + '%');
                        }
                    });
                });

            } else {
                // element has gone out of viewport
            }
        });

    });

})(jQuery);
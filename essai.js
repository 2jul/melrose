/*=========================================
                 SERVICES
=========================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});


/*=========================================
                BEDROOM
=========================================*/
$(function(){
    
    $("#bedroom-rooms").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
    
});

/*=========================================
                SERVICE
=========================================*/
$(function(){
    
    $("#customers-services").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
    
});

/*=========================================
                 GALERY
=========================================*/
$(function () {

    $("#galeries").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=========================================
                ACTIVITIES
=========================================*/
$(function(){
    
    $("#customers-activities").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
    
});

/*=========================================
                STATS
=========================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=========================================
                CLIENTS
=========================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            580 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            992 : {
                items: 6
            }
            
            
        }
    });
});

/*=========================================
                NAVIGATION
=========================================*/
// Show/hide transparent black navigation

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("melrose-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("melrose-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth-scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team, and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click

$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
        
        $(".navbar-toggle").click();
    });
});







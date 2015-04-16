$(document).ready(function() {

    // animation title
    // function animationTitle(){
    //     document.title = "resOpal";
    //     setTimeout(function(){document.title = "a grUnt project"},5000);

    // }
    // setInterval(animationTitle, 10000);

    // jQuery UI accordion
    var icons = {
    	header: "",
    	activeHeader: ""
    };

    $( "#accordion" ).accordion({
    	heightStyle: "content",
    	icons: true,
    	icons: icons,
    	active: 2,
    	// animate: "easeOutBounce",
    	collapsible: true,
    });

    $( "#toggle" ).button().click(function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        	$( "#accordion" ).accordion( "option", "icons", null );
        } else {
        	$( "#accordion" ).accordion( "option", "icons", icons );
        }
    });

    // jquery UI tabs
    $(function() {
        $( "#tabs" ).tabs({
        	event: "mouseover",
            active: 1
        });
    });

    // jQuery ScrollTo
    $('.navItem').click(function(e){
        var _this = $($(this).attr('href'));
        $('body, html').animate({
        scrollTop: _this.offset().top
        }, 500) 
    });

    // navigation active during scroll
    var sections = $('section'), 
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this), 
        id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

    return false;
    });

    // slick-slider 1
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: '50px',
        autoplay: true,
        responsive: [
            {
            breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });

    // slick-slider 2
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        autoplay: true
    });

    // svg-png IE8 fallback
    // if (!Modernizr.svg) {
    //     $('img[src$=".svg"]').each(function() {
    //         // E.g replaces 'logo.svg' with 'logo.png'.
    //         $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    //     });
    // }

    // // anim IE8 fallback
    // if (!Modernizr.cssanimation) {
    //     $(".xxxxx").animate({
    //         left: 500
    //     });
    // }
});
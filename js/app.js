$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });

    // PARTNERS SLIDER
    $('#speciality-slider').owlCarousel({
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', ' <i class="material-icons">keyboard_arrow_right</i>'],
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            }
        }
    });

    // HOME-LAB-TEST-SLIDER
    $('#home-lab-test-slider').owlCarousel({
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,     
        margin: 10,   
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            500: {
                items: 2,
                margin: 15
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
                margin: 20
            }
        }
    });

    (function () {
        // OPEN TABS
        $('[data-open-tab]').click(function (ev) {
            ev.preventDefault();
            $('#' + $(this).attr('data-open-tab')).trigger('click');
        });
    })();


    // MULTI LEVEL MENU LEFT
    (function () {
        if ($(window).width() < 768) {
            $('ul.st-left-multilevel-menu li a').each(function () {
                var mobileBtn = '<i class="icon fas fa-plus d-flex position-absolute align-items-center justify-content-center h-100"></i>';
                if ($(this).next('ul').length) {
                    $(this).addClass('has-multi-menu').append(mobileBtn);
                }
            });

            $('ul.st-left-multilevel-menu li a > .icon').click(function (ev) {
                ev.preventDefault();
                $(this).toggleClass('fa-plus fa-minus');
                $(this).closest('li').toggleClass('active').find('>ul').slideToggle();
            });
        }
    })();

    // MOBILE FILTER BTN
    (function () {
        $('.docs-result > .mobile-filter-btn > .st-btn').click(function (ev) {
            ev.preventDefault();
            console.log("object");
            $(this).parent().next().toggleClass('d-none');
        });
    })();

    // ST-DYNAMIC-TABS
    (function () {
        var navCount = 0;
        var tabContentCount = 0;
        $('.st-dynamic-tabs > li').each(function () {
            console.log(navCount);
            $('>a', this).attr('id', 'aria-tab-' + navCount);
            $('>a', this).attr('href', '#href-' + navCount);
            $('>a', this).attr('aria-controls', 'href-' + navCount);
            navCount += 1;
        });
        $('.st-dynamic-tabs + .tab-content > .tab-pane').each(function () {
            console.log(tabContentCount);
            $(this).attr('aria-labelledby', 'aria-tab-' + tabContentCount)
            $(this).attr('id', 'href-' + tabContentCount)
            tabContentCount += 1;
        });
    })();

    // star-rating-ul
    (function () {
        $('.star-rating-ul > li label').hover(function () {
            $(this).parent().addClass('active');
            $(this).parent().prevAll().addClass('active');
            $(this).parent().nextAll().removeClass('active');
        }, function () {
            if ($('>input', this).is(':checked')) {
                $(this).parent().addClass('active');
                $(this).parent().prevAll().addClass('active');
                $(this).parent().nextAll().removeClass('active');
            } else {
                $(this).parent().removeClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

        // $('.star-rating-ul > li label > input').change(function () {
        //     if ($(this).is(':checked')) {
        //         $(this).parent().parent().addClass('active');
        //         $(this).parent().parent().prevAll().addClass('active');
        //         $(this).parent().parent().nextAll().removeClass('active');
        //     }
        // });
    })();

});
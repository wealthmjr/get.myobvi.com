$(document).ready(function () {
    // $('header #search-btn').click(function () {
    //     $('.search-dropdown').addClass('show');
    // });
    // $('.search-dropdown #close-btn').click(function () {
    //     $('.search-dropdown').removeClass('show');
    // });

    // responsive sub-menu

    var width = $(window).width();
    if (width < 1200) {
        $('.nav-bar li').click(function () {
            $(this).children('.sub-menu').toggle();
        });
        $('.nav-toggle-btn').click(function () {
            $('.nav-bar').addClass('show');
            $('.fixed-overlay').fadeToggle();
        });
        $('.close-menu-btn').click(function () {
            $('.nav-bar').removeClass('show');
            $(".fixed-overlay").fadeOut();
        });


        $(document).on('click', function (event) {
            if (!$(event.target).closest('.nav-bar, .nav-toggle-btn').length) {
                $(".nav-bar").removeClass("show");
                $(".fixed-overlay").fadeOut();
            }
        });
    }
});

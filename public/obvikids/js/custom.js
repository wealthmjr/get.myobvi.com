$(document).ready(function () {
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

    $("#buy-protein-1").click(function (e) {
        e.preventDefault();
        var cart_url = "https://myobvi.com/cart/";
        var protein_val = $("#select-protein-1").val();

        if ($("#select-protein-1").val() !== null) {
            // alert(cart_url + protein_val);
            window.location.href = cart_url + protein_val;
        }
    });

    $("#buy-protein-2").click(function (e) {
        e.preventDefault();
        var cart_url = "https://myobvi.com/cart/";
        var flavor1 = $("#flavor-1").val();
        var flavor2 = $("#flavor-2").val();


        if (flavor1 !== null && flavor2 !== null) {
            window.location.href = cart_url + flavor1 + "," + flavor2;
        } else {
            // alert("select some value!!!");
        }

    });

    $("#buy-protein-3").click(function (e) {
        e.preventDefault();
        var cart_url = "https://myobvi.com/cart/";
        var flavor1 = $("#collagen-flavor").val();
        var flavor2 = $("#kidsprotein-flavor").val();


        if (flavor1 !== null && flavor2 !== null) {
            window.location.href = cart_url + flavor1 + "," + flavor2;
        } else {
            // alert("select some value!!!");
        }
    });
});

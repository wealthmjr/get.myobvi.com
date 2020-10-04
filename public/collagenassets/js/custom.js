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
    
    
    $('#select-protein-1').on('change', function() {
        var image_name = $(this).find(':selected').data('img');
    
        if ( $(this).val() == "32439766351921:1" || image_name == "product_pinkvelvet.png" ) {
            console.log("PINK VELVET");
            $("#first_product_price").html("$44.99");
        } else {
            $("#first_product_price").html("$39.99 <p class='old-price'>$44.99</p>");
        }
        
        var first_product_image = $("#first_product_image");
        
        first_product_image.attr("src","/collagenassets/images/" + image_name);
        console.log("change image");
    });
    
    $('#collagen-flavor').on('change', function() {
        console.log("change image");
        var image_name = $(this).find(':selected').data('img');
        var first_product_image = $("#third_product_image");
        first_product_image.attr("src","/collagenassets/images/" + image_name);
    });
    
    $('#flavor-1').on('change', function() {
        console.log("change image");
        var image_name = $(this).find(':selected').data('img');
        var first_product_image = $("#second_product_image");
        first_product_image.attr("src","/collagenassets/images/" + image_name);
    });
        
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
        window.location.href = cart_url + flavor1;
        
        // if (flavor1 !== null && flavor2 !== null) {
        //     window.location.href = cart_url + flavor1 + "," + flavor2;
        // } else {
        //     if (flavor1 !== null) {
        //         // alert("flavor1");
        //         window.location.href = cart_url + flavor1;
        //     }
        //     if (flavor2 !== null) {
        //         // alert("flavor2");
        //         window.location.href = cart_url + flavor2;
        //     }
        // }
        
    });
    
    $("#buy-protein-3").click(function (e) {
        e.preventDefault();
        var cart_url = "https://myobvi.com/cart/";
        var flavor1 = $("#collagen-flavor").val();
        var flavor2 = $("#beauty-flavor").val();
        var flavor3 = $("#immunity-defense").val();
        window.location.href = cart_url + flavor1;
        
        // if (flavor1 !== null && flavor2 !== null) {
        //     window.location.href = cart_url + flavor1 + "," + flavor2 + "," + flavor3;
        // } else {
        //     // alert("select some value!!!");
        // }
    });
    
    //content_type: product_group
    // content_ids: [2162729025585]
    // value: 39.99
    // num_items: 1
    // currency: USD
});

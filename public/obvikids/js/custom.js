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
        var varient = {
            "fruity_fruity" : "31689327804465:1",
            "fruity_cocoa" : "31689327837233:1",
            "fruity_cookie" : "32241646403633:1",
            "fruity_marshmellow" : "32241646534705:1",
            
            "cocoa_cocoa" : "31689327902769:1",
            "cocoa_fruity" : "31689327870001:1",
            "cocoa_cookie" : "32241646567473:1",
            "cocoa_marshmellow" : "32241646600241:1",
            
            "cookie_cocoa" : "32241646665777:1",
            "cookie_fruity" : "32241646633009:1",
            "cookie_cookie" : "32241646731313:1",
            "cookie_marshmellow" : "32241646698545:1",
            
            "marshmellow_cocoa" : "32241646796849:1",
            "marshmellow_fruity" : "32241646764081:1",
            "marshmellow_cookie" : "32241646862385:1",
            "marshmellow_marshmellow" : "32241646829617:1",        
        };
        var cart_url = "https://myobvi.com/cart/";
        var flavor1 = $("#flavor-1").find(':selected').data('img');
        var flavor2 = $("#flavor-2").find(':selected').data('img');
        var product_short_name = flavor1  + "_" + flavor2;
        var product_value = varient[product_short_name]
        var url = cart_url + product_value;
        window.location.href = url;
    });

    $("#buy-protein-3").click(function (e) {
        e.preventDefault();
        var varient = {
            "fruity_fruity" : "32013958807601:1",
            "fruity_cocoa" : "32013958840369:1",
            "fruity_cookie" : "32241694048305:1",
            "fruity_marshmellow" : "32241694081073:1",
            
            "cocoa_fruity" : "32013958742065:1",
            "cocoa_cocoa" : "32013958774833:1",
            "cocoa_cookie" : "32241694113841:1",
            "cocoa_marshmellow" : "32241694146609:1",
            
            "cinnamon_fruity" : "31685415141425:1",
            "cinnamon_cocoa" : "31685415174193:1",
            "cinnamon_cookie" : "32241694310449:1",
            "cinnamon_marshmellow" : "32241694343217:1",
            
            "frosted_fruity" : "31685415272497:1",
            "frosted_cocoa" : "31685415305265:1",
            "frosted_cookie" : "32241694179377:1",
            "frosted_marshmellow" : "32241694212145:1",
            
            "honey_fruity" : "31685415338033:1",
            "honey_cocoa" : "31685415370801:1",
            "honey_cookie" : "32241694244913:1",
            "honey_marshmellow" : "32241694277681:1",  
        };
        var cart_url = "https://myobvi.com/cart/";
        var flavor1 = $("#collagen-flavor").find(':selected').data('img');
        var flavor2 = $("#kidsprotein-flavor").find(':selected').data('img');
        var product_short_name = flavor1  + "_" + flavor2;
        var product_value = varient[product_short_name]
        var url = cart_url + product_value;
        window.location.href = url;
    });
    
    
    
    $('#select-protein-1').on('change', function() {
        var image_name = $(this).find(':selected').data('img');
        var first_product_image = $("#first_product_image");
        
        first_product_image.attr("src","/obvikids/images/products/" + image_name);
        console.log("change image");
    });
    

    
    $('#collagen-flavor').on('change', function() {
        console.log("change image");
        var first_image = $(this).find(':selected').data('img');
        var second_image = $("#kidsprotein-flavor").find(':selected').data('img');
        var image_name = first_image + "_" + second_image + ".png";
        console.log(image_name);
        var third_product_image = $("#third_product_image");
        third_product_image.attr("src","/obvikids/images/products/" + image_name);
    });
    
    
    $('#kidsprotein-flavor').on('change', function() {
        console.log("change image");
        var second_image = $(this).find(':selected').data('img');
        var  first_image = $("#collagen-flavor").find(':selected').data('img');
        var image_name = first_image + "_" + second_image + ".png";
        console.log(image_name);
        var third_product_image = $("#third_product_image");
        third_product_image.attr("src","/obvikids/images/products/" + image_name);
    });
    
    
    
});

$(document).ready(function(){

    jQuery(".menu-btn").click(function(){
        jQuery(this).parents(".mobile-menu").toggleClass("open");
        jQuery(".nav-top").toggleClass("open");
    });

    $(".menu-element a").each(function () {
        var location;
        var link = this.href;
        location= window.location.href;
        if(location == link){
            $(this).parents(".menu-element").addClass("active");
        }
    });
    $(".js-read-more").on("click", function(){
        $(this).parents(".read-more-container").toggleClass("open");
    });

    $('.to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $(".btn-details").click(function(){
        $(this).parents(".objects-container").toggleClass("show-item-object");
        $(this).parents(".item-object").toggleClass("show-item-object");
    });
});



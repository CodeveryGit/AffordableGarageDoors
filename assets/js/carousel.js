$(document).ready(function(){
    $(".owl-carousel ").on("click ",".owl-prev", function(){
        owl.trigger('prev.owl.carousel');
    });
    $(".owl-carousel").on("click",".owl-next", function(){
        owl.trigger('next.owl.carousel');
    });
    $.cookie('windowWidth', window.innerWidth);
    owlCarousel();
    updateCarousel();
});
$(window).resize(function () {
    owlCarousel();
    if(($.cookie('windowWidth')>=768 && window.innerWidth< 768) ||
       ($.cookie('windowWidth')<768 && window.innerWidth>=768)){
            $.cookie('windowWidth', window.innerWidth);
            location.reload();
    }
});
var owl = $('.owl-carousel');
function owlCarousel() {
    $(".owl-nav").remove();
    if (window.innerWidth < 768){
        owl.owlCarousel({
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
            }
        })
        $(".owl-carousel .owl-prev").html('');
        $(".owl-carousel .owl-next").html('');

        if ($('.owl-nav').size() < 2) {
            $(".owl-carousel").prepend('<div class="owl-nav"><div class="owl-prev"></div><div class="owl-next"></div></div>');
            $(".owl-carousel").append('<div class="owl-nav"><div class="owl-prev"></div><div class="owl-next"></div></div>');
        }
        owl.on('changed.owl.carousel', function (event) {
            var currentItem = event.item.index;
            currentItem=currentItem+1;
            $(this).find(".clyde-num").remove();
            $(this).prepend('<div class="clyde-num">' + (currentItem) + ' / ' + $('.item-object').size() + '</div>');
            $(this).append('<div class="clyde-num">' + (currentItem) + ' / ' + $('.item-object').size() + '</div>');
        })
    }
}
function updateCarousel(){
    $(this).find(".clyde-num").remove();
    $(".owl-carousel").append('<div class="clyde-num">1 / '+$('.item-object').size()+'</div>');
    $(".owl-carousel").prepend('<div class="clyde-num">1 / '+$('.item-object').size()+'</div>');
}
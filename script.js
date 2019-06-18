$(document).ready(function(){
    $(".sticker").draggable({});

    $("body").addClass('body--history');
  
    setTimeout(function(){ $(".history p").addClass('loaded'); }, 1000);
    setTimeout(function(){ $(".sticker__clock").addClass('loaded'); }, 1400);
    setTimeout(function(){ $(".sticker__building").addClass('loaded'); }, 1500);
    setTimeout(function(){ $(".sticker__2018").addClass('loaded'); }, 1600);
    setTimeout(function(){ $(".sticker__each").addClass('loaded'); }, 1700);
    setTimeout(function(){ $(".sticker__racs").addClass('loaded'); }, 1800);
    setTimeout(function(){ $(".sticker__th").addClass('loaded'); }, 1900);
    setTimeout(function(){ $(".sticker__tower").addClass('loaded'); }, 2000);
    


});



$("a[href='#developers']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
});


$(".sticker__phone").click(function(){
    $("html, body").animate({ scrollTop: $(".history__first").offset().top }, "slow");
});

$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos + 5});
});




$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var scrollBottom = $(this).scrollTop() + $(window).height();
    var $brochureTop = $('#brochure').offset().top;

    
    // brochure trigger
    if(scrollTop >= ($brochureTop - 400)) {
        $('body').removeClass();
        $('body').addClass("body--brochure");
    }
    
    // history trigger
    if(scrollTop <= ($brochureTop - 400)) {
        $('body').removeClass();
        $('body').addClass("body--history");
    }
    
    $('#history, #brochure, #area').each(function(){
       
        var id = $(this).attr('id');
        var topThing = $(this).offset().top;
        var bottomThing = $(this).offset().top + $(this).height();
        
        if ( topThing < scrollTop && bottomThing > scrollTop) {
            // nav-active
            $('.header li:not(#' + id + '__button)').removeClass('active')
            $('#' + id + '__button').addClass('active');
        }
    });
    
    // developers nav trigger
    if(scrollBottom >= ($(document).height() - 100)) {
        $('.header li:not(#developers__button)').removeClass('active')
        $('#developers__button').addClass('active');
    }
    
    


});




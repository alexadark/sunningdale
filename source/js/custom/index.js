jQuery(function($){
  $( ".blog .tease-post:nth-child(3),.blog .tease-post:nth-child(4), .blog .tease-post:nth-child(5)" ).addClass("tease-post--small");
  $(".tease-post--small").wrapAll("<div class='small-posts-wrapper'/>");

  $('.mobile-menu-link').click(function(){
      $('.nav-main').slideToggle();
      return false;
  });

  $('.menu-item-has-children').click(function(){
      if($(window).width()<901){
          if($(this).hasClass('open')){
                return true;
          } else {
              $(this).toggleClass('open');
              $(this).children('.sub-menu').slideToggle();
              return false;
          }
      }
  });

    $('.testimonial').slick();
    $('.slick-prev').html('<i class="fas fa-chevron-left"></i>');
    $('.slick-next').html('<i class="fas fa-chevron-right"></i>');

    $( '[data-fancybox]' ).fancybox({
        caption : function( instance, item ) {
            return $(this).find('figcaption').html();
        }
    });

    if ($('body').hasClass('logged-in')){
        $('.member-login').addClass('user-logged-in');
        $('.member-login a').html($('body').attr('username'));
    }

});

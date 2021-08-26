$(document).ready(function(){
    $('.accordion-list > li > .text').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".text").slideUp();
      } else {
        $(".accordion-list > li.active .text").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".text").slideDown();
      }
      return false;
    });
    
  });
(function($){
  $.fn.smoothScroll = function(options){

    var defaults = {
      speed : 2000,
      scrollToElement : ''
    };

    var settings = $.extend({},defaults,options);

    if(settings.scrollToElement !== ''){
      var scrollTop = $(settings.scrollToElement).offset().top;
      $("html, body").animate({scrollTop:scrollTop}, settings.speed);
    }

  }
}(jQuery));

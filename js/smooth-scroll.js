// ; is for safety, for previous plugins and/or unclosed javascript

;
(function($, window, document) {

  var pluginName = 'smoothScroll',
    defaults = {
      speed: 2000,
      scrollToElement: ''
    };

  //Plugin Constructor
  function SmoothScroll(options) {
    this.options = $.extend({}, defaults, options);

    // Private variables
    this._default = defaults;
    this._pluginName = pluginName;

    // Run Initializer
    this.init();
  }

  SmoothScroll.prototype.init = function() {
    _scroll(this);
  };

  function _scroll(el){
    if(el.options.scrollToElement !== '') {
      var scrollTop = $(el.options.scrollToElement).offset().top;
      $("html, body").animate({scrollTop: scrollTop}, el.options.speed);
    }
  }
  $.fn[pluginName] = function(options) {
    return this.each(function() {
        new SmoothScroll(options);
    });
  }

}(jQuery, window, document));

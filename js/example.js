$(function(){
  $('.sample_link').on('click', function(){
    $('.sample_link').smoothScroll({
      speed: 1000,
      scrollToElement: '#scrollToElement'
    });
  });
});

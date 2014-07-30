$(function(){
  $('.sample_link').on('click', function(){
    $('.sample_link').smoothScroll({
      speed: 1000,
      scrollToElement: '#scrollToElement'
    });
  });
  $('.sample_link2').on('click', function(){
    $('.sample_link2').smoothScroll({
      speed: 300,
      scrollToElement: '#scrollToElement2'
    });
  });
});

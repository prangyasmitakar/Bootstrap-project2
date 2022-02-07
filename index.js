$('.slider-nav').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.nav1 ul li a').click(function () {
  $(this).parent().addClass('active').siblings().removeClass('active');
});

$('.portfolio ul li a').click(function () {
  $(this).parent().addClass('active').siblings().removeClass('active');
});
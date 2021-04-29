const portfolio = {};

portfolio.scollingFade = () => {
  $(document).ready(function () {
    //fade on scroll only when scroll is wider than 1000px
    if ($(window).height() > 900) {
      $(".fadeOne").scrollFadeOut();
      $(".fadeTwo").scrollFadeIn(1000);
      $(".fadeThree").scrollFadeIn(1800);
      $(".fadeFour").scrollFadeIn(2700);
      $(".fadeFive").scrollFadeIn(5000);
    } else if ($(window).height() > 700) {
      $(".fadeOne").scrollFadeOut();
      $(".fadeTwo").scrollFadeIn(800);
      $(".fadeThree").scrollFadeIn(1500);
      $(".fadeFour").scrollFadeIn(2400);
      $(".fadeFive").scrollFadeIn(4300);
    } else if ($(window).height() < 700) {
      $(".fadeOne").scrollFadeOut();
    }
  });
};

portfolio.init = () => {
  portfolio.scollingFade();
};

portfolio.init();

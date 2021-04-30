const portfolio = {};

portfolio.scollingFade = () => {
  $(document).ready(function () {
    const windowHeight = $(window).height();
    const large = 900;
    const medium = 700;
    //fade on scroll only when scroll is wider than 1000px
    if (windowHeight > large) {
      $(".fadeOne").scrollFadeOut();
      $(".fadeTwo").scrollFadeIn(1000);
      $(".fadeThree").scrollFadeIn(1800);
      $(".fadeFour").scrollFadeIn(2500);
      $(".fadeFive").scrollFadeIn(4600);
    } else if (windowHeight < large && windowHeight > medium) {
      $(".fadeOne").scrollFadeOut();
      $(".fadeTwo").scrollFadeIn(800);
      $(".fadeThree").scrollFadeIn(1600);
      $(".fadeFour").scrollFadeIn(2400);
      $(".fadeFive").scrollFadeIn(4300);
    } else {
      $(".fadeOne").scrollFadeOut();
    }
  });
};

portfolio.init = () => {
  portfolio.scollingFade();
};

portfolio.init();

const portfolio = {};

portfolio.scollingFade = () => {
  $(document).ready(function () {
    $(".fadeOne").scrollFadeOut(1200);
    $(".fadeTwo").scrollFadeIn(1000);

    $(".fadeThree").scrollFadeIn(1800);
    $(".fadeFour").scrollFadeIn(2700);
    $(".fadeFive").scrollFadeIn(5000);
  });
};

portfolio.init = () => {
  portfolio.scollingFade();
};

portfolio.init();

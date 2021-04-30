const portfolio = {};

portfolio.scollingFade = () => {
  $(document).ready(function () {
    const sectionOne = $(".fadeOne")[0].offsetTop;
    const sectionTwo = $(".fadeTwo")[0].offsetTop;
    const sectionThree = $(".fadeThree")[0].offsetTop;
    const sectionFour = $(".fadeFour")[0].offsetTop;
    const sectionFive = $(".fadeFive")[0].offsetTop;

    $(".fadeOne").scrollFadeOut();
    $(".fadeTwo").scrollFadeIn(sectionTwo);
    $(".fadeThree").scrollFadeIn(sectionThree);
    $(".fadeFour").scrollFadeIn(sectionFour);
    $(".fadeFive").scrollFadeIn(sectionFive);
  });
};

portfolio.init = () => {
  portfolio.scollingFade();
};

portfolio.init();

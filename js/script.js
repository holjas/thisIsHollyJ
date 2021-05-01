const portfolio = {};

portfolio.fadingScrollBody = () => {
  const fadeElBottom = $(".fade-scroll-bottom");

  $(document).on("scroll", function () {
    let bottomScollPos = $(document).scrollTop() + $(window).height();

    fadeElBottom.each(function () {
      let elemOffsetTop = $(this).offset().top;

      if ($(window).height() > 800) {
        if (bottomScollPos > elemOffsetTop)
          $(this).css("opacity", (bottomScollPos - elemOffsetTop - 100) / 550);
      }

      if ($(window).height() < 800) {
        if (bottomScollPos > elemOffsetTop)
          $(this).css("opacity", (bottomScollPos - elemOffsetTop) / 550);
      }
    });
  });
};

portfolio.init = () => {
  portfolio.fadingScrollBody();
};

portfolio.init();

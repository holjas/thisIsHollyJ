const portfolio = {};

portfolio.fadingScrollBody = () => {
  const fadeElBottom = $(".fade-scroll-bottom");

  $(document).on("scroll", function () {
    let bottomScollPos = $(document).scrollTop() + $(window).height();

    fadeElBottom.each(function () {
      let elemOffsetTop = $(this).offset().top;
      if (bottomScollPos > elemOffsetTop)
        $(this).css("opacity", (bottomScollPos - elemOffsetTop - 150) / 550);
    });
  });
};

portfolio.init = () => {
  portfolio.fadingScrollBody();
};

portfolio.init();

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
          $(this).css("opacity", (bottomScollPos - elemOffsetTop) / 450);
      }
    });
  });
};

portfolio.marquee = () => {
  $(function () {
    $(".marquee").marquee({
      // Set to false if you want to use jQuery animate method
      allowCss3Support: true,
      css3easing: "linear",
      easing: "linear",
      direction: "down",
      duplicated: false,
      duration: 3000,
      pauseOnCycle: false,
      pauseOnHover: true,
      startVisible: false,
    });
  });
};

portfolio.init = () => {
  portfolio.fadingScrollBody();
  portfolio.marquee();
};

portfolio.init();

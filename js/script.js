const portfolio = {};

portfolio.fadeInScroll = () => {
  $(window).on("load", function () {
    $(window)
      .scroll(function () {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".fade").each(function () {
          /* Check the location of each desired element */
          let objectBottom = $(this).offset().top + $(this).outerHeight();
          let objectTest = objectBottom - 400;
          /* If the element is completely within bounds of the window, fade it in */
          if (objectTest < windowBottom) {
            //object comes into view (scrolling down)
            if ($(this).css("opacity") == 0) {
              $(this).fadeTo(900, 1);
            }
          } else {
            //object goes out of view (scrolling up)
            if ($(this).css("opacity") == 1) {
              $(this).fadeTo(900, 0);
            }
          }
        });
      })
      .scroll();
  });
};
portfolio.fadeInScrollLarge = () => {
  $(window).on("load", function () {
    $(window)
      .scroll(function () {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".fadeLarge").each(function () {
          /* Check the location of each desired element */
          let objectBottom = $(this).offset().top + $(this).outerHeight();
          let objectTest = objectBottom - 1900;
          /* If the element is completely within bounds of the window, fade it in */
          if (objectTest < windowBottom) {
            //object comes into view (scrolling down)
            if ($(this).css("opacity") == 0) {
              $(this).fadeTo(900, 1);
            }
          } else {
            //object goes out of view (scrolling up)
            if ($(this).css("opacity") == 1) {
              $(this).fadeTo(900, 0);
            }
          }
        });
      })
      .scroll();
  });
};

portfolio.init = () => {
  portfolio.fadeInScroll();
  portfolio.fadeInScrollLarge();
};

portfolio.init();

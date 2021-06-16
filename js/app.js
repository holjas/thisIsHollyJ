import { colourThemes } from "./colours.js";

const myWebsite = {};

// home page animation of 'titles'
myWebsite.homepageAnimation = () => {
  // credit to https://www.jqueryscript.net/animation/Simple-jQuery-Text-Rotator-with-CSS3-Animations.html
  $(".rotate-demo").textRotator({
    // animation types
    // http://daneden.github.io/animate.css/
    animation: "fadeIn",
    seprator: ",",
    speed: "3000",
  });
};

// change background & text color
myWebsite.colourChanges = () => {
  let direction = true;

  $("#colourChanger").click(function (e) {
    e.preventDefault();

    const randomNumber = myWebsite.generateRandomNumber();
    const backgroundColour = "rgb(" + colourThemes[randomNumber].colorOne + ")";
    const primaryColor = "rgb(" + colourThemes[randomNumber].colorTwo + ")";
    const mainTextColour = "rgb(" + colourThemes[randomNumber].fontColour + ")";

    // primary color change
    $("body, li a, .fa-icon, .containerHeadline").css("color", primaryColor);
    $("form .btn").css("background-color", primaryColor);
    // main text color change
    $("p, [data-filter], label").css("color", mainTextColour);
    $("form .btn").css("color", "white");
    //
    //
    // background color change with wipe

    if (direction) {
      $(".colourChangerBox").removeClass("down-leave-active");
      $(".colourChangerBox")
        .addClass("down-enter-active")
        .css("background-color", backgroundColour);
      $("body").css("background-color", primaryColor);
      direction = false;
    } else {
      $(".colourChangerBox").removeClass("down-enter-active");
      $(".colourChangerBox")
        .addClass("down-leave-active")
        .css("background-color", backgroundColour);
      $("body").css("background-color", primaryColor);
      direction = true;
    }
  });
};

// portfolio, remove greyscale on hover
myWebsite.portfolioHover = () => {
  $(".card").hover(
    function () {
      $(this).children("img").addClass("card-img-top-hover");
    },
    function () {
      $(this).children("img").removeClass("card-img-top-hover");
    }
  );
};

// generate random number
myWebsite.generateRandomNumber = () => {
  return Math.floor(Math.random() * colourThemes.length);
};

myWebsite.init = () => {
  myWebsite.homepageAnimation();
  myWebsite.colourChanges();
  myWebsite.portfolioHover();
};

myWebsite.init();

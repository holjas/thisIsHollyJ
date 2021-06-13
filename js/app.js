import { colourThemes } from "./colours.js";
// console.log(colourThemes);

const myWebsite = {};

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

myWebsite.colourChanges = () => {
  $("#colourChanger").click(function (e) {
    e.preventDefault();

    const randomNumber = myWebsite.generateRandomNumber();
    const backgroundColour = "rgb(" + colourThemes[randomNumber].colorOne + ")";
    const fontColour = "rgb(" + colourThemes[randomNumber].colorTwo + ")";
    const mainTextColour = "rgb(" + colourThemes[randomNumber].fontColour + ")";

    $("body").css("background-color", backgroundColour);
    $("body").css("color", fontColour);
    $("li a").css("color", fontColour);
    $(".fa-exchange-alt").css("color", fontColour);
    $("p").css("color", mainTextColour);
    $(".containerHeadline").css("color", fontColour);
  });
};

myWebsite.generateRandomNumber = () => {
  return Math.floor(Math.random() * colourThemes.length);
};

myWebsite.init = () => {
  myWebsite.homepageAnimation();
  myWebsite.colourChanges();
};

myWebsite.init();

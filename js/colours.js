const colourThemes = [
  { colorOne: "30, 59, 52", colorTwo: "252, 108, 17" },
  { colorOne: "255, 209, 0", colorTwo: "222, 16, 222" },
  { colorOne: "245, 204, 207", colorTwo: "1, 178, 139" },
  { colorOne: "252, 59, 45", colorTwo: "14, 47, 86" },
  { colorOne: "17,35,120", colorTwo: "246, 74, 0" },
  { colorOne: "40,41,43", colorTwo: "255,0,70" },
  { colorOne: "229, 232, 220", colorTwo: "246, 116, 141" },
  { colorOne: "55,23,34", colorTwo: "187,171,155" },
  { colorOne: "22,155,163", colorTwo: "255,253,231" },
  { colorOne: "102,20,200", colorTwo: "242,90,16" },
  { colorOne: "1,143,211", colorTwo: "244,199,238" },
  { colorOne: "30,59,52", colorTwo: "254,188,0" },
  { colorOne: "40,41,43", colorTwo: "177,253,234" },
  { colorOne: "255,140,139", colorTwo: "30,59,52" },
  { colorOne: "255,43,147", colorTwo: "124,244,230" },
  { colorOne: "187,171,155", colorTwo: "55,23,34" },
  { colorOne: "40,41,43", colorTwo: "238,217,116" },
  { colorOne: "198,215,199", colorTwo: "255,80,52" },
];

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

    $("body").css("background-color", backgroundColour);
    $("body").css("color", fontColour);
    $("li a").css("color", fontColour);
    $(".fa-exchange-alt").css("color", fontColour);
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

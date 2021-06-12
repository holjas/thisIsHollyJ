// const colourThemes = [
//   { colorOne: "30, 59, 52", colorTwo: "252, 108, 17" },
//   { colorOne: "255, 209, 0", colorTwo: "222, 16, 222" },
//   { colorOne: "245, 204, 207", colorTwo: "1, 178, 139" },
//   { colorOne: "252, 59, 45", colorTwo: "14, 47, 86" },
//   { colorOne: "17,35,120", colorTwo: "246, 74, 0" },
//   { colorOne: "40,41,43", colorTwo: "255,0,70" },
//   { colorOne: "229, 232, 220", colorTwo: "246, 116, 141" },
// ];
console.log("COLOURS IS CONNETED");

const myWebsite = {};

myWebsite.homepageAnimation = () => {
  // credit to https://www.jqueryscript.net/animation/Simple-jQuery-Text-Rotator-with-CSS3-Animations.html
  $(".rotate-demo").textRotator({
    // animation types
    // http://daneden.github.io/animate.css/
    animation: "fadeIn",
    // animation: "fadeInUp",

    // custom sprator
    seprator: ",",

    // animation speed in ms
    speed: "3000",
  });
};

myWebsite.init = () => {
  myWebsite.homepageAnimation();
};

myWebsite.init();

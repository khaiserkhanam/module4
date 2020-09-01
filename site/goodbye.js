(function () {
var byeSpeakername = {};
byeSpeakername.speak = function (name){
  console.log(speakWord + " " + name);
}

var speakWord = "Good Bye";

window.byeSpeakername = byeSpeakername;
})();
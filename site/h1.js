(function (){

    var helloSpeakername = {};
    helloSpeakername.speak = function (name) {
      console.log(speakWord + " " + name);
    };
    
    var speakWord = "Hello";
    
    window.helloSpeakername = helloSpeakername;
    })();
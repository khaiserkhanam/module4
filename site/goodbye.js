(function (){
    var names = ["July", "Carlin", "James", "Cinderella", "Samuel", "Grace", "John", "Jasmin", "Lilly", "Mohan"];
    
    for (var element of names) {
    
      var firstLetter = element.charAt(0).toLowerCase();
    
      if (firstLetter == 'j') {
        byeSpeakername.speak(element);
      } else {
        helloSpeakername.speak(element);
      }
    }
    })();
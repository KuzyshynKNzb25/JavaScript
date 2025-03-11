
(function(window){
    const libHello = {};
    libHello.speakWord = "Hello";
    libHello.speak = function (name) {
        console.log(libHello.speakWord + " " + name);
      }
      window.hello = libHello;

})(window);
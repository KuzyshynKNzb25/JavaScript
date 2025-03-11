
(function(window){
    const libHello = {};
    let speakWord = "Hello";
    libHello.speak = function (name) {
        console.log(speakWord + " " + name);
      }
      window.hello = libHello;

})(window);

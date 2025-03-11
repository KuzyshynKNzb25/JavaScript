(function(window){
    const goHome = {};
    let speakWord = "why are you still not at home?";
    goHome.speak = function (name) {
        console.log(name  + " " + speakWord);
      }
      window.goHome = goHome;

})(window);



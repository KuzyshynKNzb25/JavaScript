(function(window){
    const goHome = {};
    let speakWord = "why you are still not at home?";
    goHome.speak = function (name) {
        console.log(name  + " " + speakWord);
      }
      window.goHome = goHome;

})(window);



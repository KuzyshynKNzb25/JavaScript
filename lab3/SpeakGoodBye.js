(function(window){
    const libBuy = {};
    let speakWord = "Good Bye";
    libBuy.speak = function (name) {
        console.log(speakWord + " " + name);
      }
      window.buy = libBuy;

})(window);



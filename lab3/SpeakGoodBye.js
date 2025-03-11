(function(window){
    const libBuy = {};
    libBuy.speakWord = "Good Bye";
    libBuy.speak = function (name) {
        console.log(libBuy.speakWord + " " + name);
      }
      window.buy = libBuy;

})(window);



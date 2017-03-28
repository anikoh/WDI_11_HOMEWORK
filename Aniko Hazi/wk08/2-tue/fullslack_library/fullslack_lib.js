//inclusive of min but not max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var Fullslack = {

    VERSION: "1.0",

    shuffle: function(list) {
      var shuffled = [];
      while(list.length > 0){
        rand = (getRandomInt(0, list.length));
        shuffled = shuffled.concat(list.splice(rand, 1));
      }
      return shuffled;
    },

    some: function(list, callback){
      var passed = false;
      for(var i=0; i<list.length; i++){
        if (callback(list[i]) === true){
          passed = true;
        }
      }
      return passed;
    },

    map: function(list, callback){
      var mapped = [];
      for(var i=0; i<list.length; i++){
          mapped = mapped.concat(callback(list[i]));
      }
      return mapped;
    },

    filter: function(list, callback){
      var passed = [];
      for(var i=0; i<list.length; i++){
        if (callback(list[i]) === true){
          passed = passed.concat(list[i]);
        }
      }
      return passed;
    },

};


//var largerThanFive = function(elem){ return elem > 5; };
//var timesTwo = function(elem){ return elem* 2;};

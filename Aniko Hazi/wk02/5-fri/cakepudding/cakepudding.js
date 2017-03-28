
var cakePudding = function(){

  for (var i=1; i< 101; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("Cakepudding");
    }
    else if(i%5 === 0){
      console.log("Pudding");
    }
    else if(i%3 === 0){
      console.log("Cake");
    }
    else{
      console.log(i);
    }
  }

}

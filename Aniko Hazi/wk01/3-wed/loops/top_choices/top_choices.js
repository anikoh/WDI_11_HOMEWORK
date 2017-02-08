
var favouriteColours = ["blue", "cyan", "magenta", "eggshell", "hunter green"];

var index = favouriteColours.length;

for (i=0; i< index; i++){
  if(i+1 === 1){
    console.log("My " + (i+1) + "st choice is " + favouriteColours[i]);
  }
  else if(i+1 === 2){
    console.log("My " + (i+1) + "nd choice is " + favouriteColours[i]);
  }
  else if(i+1 === 3){
    console.log("My " + (i+1) + "rd choice is " + favouriteColours[i]);
  }
  else{
    console.log("My " + (i+1) + "th choice is " + favouriteColours[i]);
  }
}


var currentTemp = parseInt(prompt("Please enter the temperature!"));

var acStatus = prompt("Is the A/C functional?");

var desiredTemp = parseInt(prompt("What temperature would you like it to be?"));




if (acStatus === "yes" && currentTemp > desiredTemp){
  console.log("Turn on the A/C please!");
}
else if (acStatus === "no" && currentTemp > desiredTemp){
  console.log("fix the A/C now! It's hot!");
}
else if (acStatus === "no" && currentTemp < desiredTemp){
  console.log("Fix the A/C whenever you have the chance... It's cool..")
}

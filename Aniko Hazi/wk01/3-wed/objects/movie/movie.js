

var favouriteMovie = {
  title: "Blade Runner",
  duration: 117,
  stars: ["Harrison Ford", "Sean Young", "Rutger Hauer"]
}

var count = favouriteMovie.stars.length;

var starsString = '';
var temp;

for(var i=0; i< count; i++){
  if(i+1 === count){
    temp = starsString.concat(favouriteMovie.stars[i], '.');
    starsString = temp;
    }
  else{
    temp = starsString.concat(favouriteMovie.stars[i], ', ');
    starsString = temp;
  }
}

console.log(favouriteMovie.title + " lasts for " + favouriteMovie.duration + " minutes. Stars: " + starsString);

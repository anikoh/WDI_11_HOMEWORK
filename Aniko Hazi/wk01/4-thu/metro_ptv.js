// Now with an array of objects for the train lines, instead of a series of arrays
// With added extra train lines




// // validation doesn't work atm, because findLine sometimes return 0 as an index.
// // Will have to rewrite that first.
//
// var validateInput = function(origin, destination, Lines){
//   if (findLine(origin, Lines)=== undefined){
//     console.log("That is not a valid input");
//     }
//     if (findLine(destination, Lines)=== undefined){
//       console.log("That is not a valid input");
//       }
//   if(origin === destination){
//     console.log("You are already at your destination");
//     }
// }


// Takes trainLines and a station
// returns the index number of the train line the station is on

  var findLine = function(tempStation, Lines){
    var index = Lines.length

    for(var i=0; i< index; i++){

      var count= Lines[i].stations.length;

      for(var j= 0; j< count; j++){
        if (tempStation === Lines[i].stations[j]){
          var tempLine = i;
          }
        }
      }
      return tempLine;
    }



// takes an array, returns the index of Richmond in that array

var findSwitch = function(trainLine){
  return trainLine.indexOf("Richmond");
}



// takes two stations and a trainline,
// returns an array of stations between (and including) the input stations

var getStations = function(start, end, tempLine){

    var tempArray= [];

    if(end > start){

      for(var i=start; i<= end; i++){
      //journeyString =+ originLine[i];
      tempArray.push(tempLine[i]);
      //console.log(tempLine[i]);
      }

    }
    else{

      for(var i=start; i>= end; i--){
      //journeyString =+ originLine[i];
      tempArray.push(tempLine[i]);
      //console.log(tempLine[i]);
      }
    }
    return tempArray;
  }





  var ptPlanner = function(origin, dest){

    var trainLines = [
      {
      line: "Alamain",
      stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
      },
      {
      line: "Glen Waverley",
      stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
      },
      {
      line: "Sandringham",
      stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
      },
      {line: "Hurstbidge",
      stations: ["Ivanhoe", "Fairfield", "Dennis", "Eltham", "Clifton Hill", "Collingwood", "Richmond", "Heidelberg"]
      },
      {line: "Frankston",
      stations: ["Ormond", "Highett", "Parkdale", "Richmond", "Seaford", "Caulfield"]
      }
    ]

  var stationsArray= [];

  // validateInput(origin, dest, trainLines);

  var originLine = findLine(origin, trainLines);
  var originIndex = trainLines[originLine].stations.indexOf(origin);

  var destLine = findLine(dest, trainLines);
  var destIndex = trainLines[destLine].stations.indexOf(dest);

  var originSwitch = findSwitch(trainLines[originLine].stations);
  var destSwitch = findSwitch(trainLines[destLine].stations);


  var firstHalf = getStations(originIndex, originSwitch, trainLines[originLine].stations);

  // removes the duplicate Richmond
  firstHalf.pop();
  stationsArray = stationsArray.concat(firstHalf);

  var secondHalf = getStations(destSwitch, destIndex, trainLines[destLine].stations);
  stationsArray = stationsArray.concat(secondHalf);

  var stationsText = stationsArray.join(" -----> ");


  console.log("origin: " + origin + "\n" + "destination: " + dest + "\n\n" + stationsText + "\n\n" + (stationsArray.length-1) + " stops total" )



}







  //
  // var alamainSwitch = 1;
  // var glenWaverlySwithch = 3;
  // var sandringhamSwitch = 1;
  //

  var announcement='';

// Not useful in this case, but if there are multiple switch points something like this would be needed
//
//  if (alamain.includes(origin) && glenWaverly.includes(origin) && sandringham.includes(origin)){
//     console.log("Is Richmond");
//
//
//  }

//
//
//  to make it independent of a fixed switching point, compare the two trainLine arrays
//  and get the index of the item that's in both arrays
//
//
//
//
//
//
//
//


  var findLine = function(station){

    if (alamain.includes(station)){
      var tempLine = alamain;
    }
    else if(glenWaverly.includes(station)){
      var tempLine = glenWaverly;
    }
    else var tempLine = sandringham;

    return tempLine;
  }

// calling a function so it's easy to replace when it's
// not hard coded

var findSwitch = function(trainLine){
  return trainLine.indexOf("Richmond");
}

// currently Richmond returns alamain as the line. This may or may not be a problem later.
//



//
// maybe keep the station list in an array until printing it
//

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

//    var origin = prompt("Enter origin!");
//    var dest = prompt("Enter destination");

    var alamain =["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

    var glenWaverly =["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

    var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

    var stationsArray = [];


  var originLine = findLine(origin);
  var originIndex = originLine.indexOf(origin);
  var originSwitch = findSwitch(originLine);

  var destLine = findLine(dest);
  var destIndex = destLine.indexOf(dest);
  var destSwitch = findSwitch(destLine);



//
// Have to remove the duplicate Richmond. Use an array method to remove the last/first item
//
// Currently returning an empty array *******
//

  stationsArray= stationsArray.concat(getStations(originIndex, originSwitch, originLine));
  stationsArray.pop();
  stationsArray= stationsArray.concat(getStations(destSwitch, destIndex, destLine));


  var stationsText = stationsArray.join(" -----> ");

  console.log("origin: " + origin + "\n" + "destination: " + dest + "\n\n" + stationsText + "\n\n" + (stationsArray.length-1) + " stops total" )

}

//
//
//
//
//
//
//
//
//




// if (originLine === destLine)
// print from origin index to dest index in the one line
// otherwise go from origin to Richmond on origin line,
// then from Richmond to dest index on destination line



//
// switching point is hardcoded, so have a value for each line
//
// get the line and index value of the origin and destination
//
// for loops to print each station along the way
//
//
// go from origin to originLine[switch], continue from destLine[switch]
//
// special case if starting from or ending at Richmond
//(or is it? No! Richmond will just be on the same line no matter what!!)
// just need to do the switching version
//
//
// Tasks:
//  - put everything into functions to keep them neat (watch out for global/local var!)
//  - print info out nicely
//  - line switching version
//
//
//
//
//








//
// if(alamain.includes(origin)){
//   var originLine = alamain;
//   var originIndex= alamain.indexOf(origin);
// }
// else if(glenWaverly.includes(origin)){
//   var originLine = glenWaverly;
//   var originIndex= glenWaverly.indexOf(origin);
// }
// else {
//   var originLine = sandringham;
//   var originIndex= sandringham.indexOf(origin);
// }
//
//
//
//
//
//
// if(alamain.includes(dest)){
//   var destLine = alamain;
//   var destIndex= alamain.indexOf(dest);
// }
// else if(glenWaverly.includes(dest)){
//   var destLine = glenWaverly;
//   var destIndex= glenWaverly.indexOf(dest);
// }
// else {
//   var destLine = sandringham;
//   var destIndex= sandringham.indexOf(dest);
// }


// If the two train stops are on the same line
// this is basically the function for the partial path, called twice


//
//  print from originLine[originIndex] to originLine[switchIndex],
//  then from *after* destLine[switchIndex] to destLine[destIndex]
//

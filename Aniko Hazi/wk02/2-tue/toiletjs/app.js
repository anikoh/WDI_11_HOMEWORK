// Program state
var ticket = null;

console.log('please flush');

var poop = function(){
document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}


var poopBtn = document.getElementById('poop-btn');

poopBtn.addEventListener('click', poop);




var flush = function(){
document.getElementsByTagName('body')[0].style.backgroundColor = 'mintcream';
}

var flushBtn = document.getElementById('flush-btn');

flushBtn.addEventListener('click', flush);


//mintcream

var movePixel = 10;
var forwards;
var ticket;

var catWalk = function(){
  var img= document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left); //comes back as a string
  var currentRight = parseInt(img.style.right);
  var windowRight = window.innerWidth;
  var windowLeft = 0;

  if(currentLeft < windowLeft){
    forwards = true;
        img.style.transform = "rotateY(0deg)";
  }
  if(currentLeft > (windowRight-200)){
    forwards = false;
    img.style.transform = "rotateY(180deg)";
  }

  if(forwards){
    img.style.left = currentLeft + movePixel + 'px';
  }
  else{
    img.style.left = currentLeft - movePixel + 'px';
  }
}



var keepWalking = function(){
    if(!ticket){ //
    ticket = setInterval(catWalk, 100);
    } //
}

var fasterWalking = function(){
    stopWalking();
    ticket = setInterval(catWalk, 50);
}

var stopWalking = function(){
  clearInterval(ticket);
  ticket= undefined;   //
}


// if start button is clicked the function is called,
// so it's additive

var startBtn = document.getElementById('start');

startBtn.addEventListener('click', keepWalking);

//setInterval(catWalk, 100)

var stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stopWalking);

// stopBtn.addEventListener('click', );

var fastBtn = document.getElementById('faster');
fastBtn.addEventListener('click', fasterWalking);


//timers
// setTimeout(function, milliseconds)
// setInterval(function, interval)

//setInterval(catwalk, 50) - calls the function every 50 milliseconds
//clearInterval(1)
// use the receipt to cancel the timer with clearInterval


//  when start is called a ticket is created. that ticket is used to cancel
//  that interval.
//
//
//

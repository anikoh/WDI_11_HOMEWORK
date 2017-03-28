

var savWidBtn= document.querySelector('.savings_withdraw');
var savDepBtn= document.querySelector('.savings_deposit');

var savInput= document.querySelector('.savings_input');

var savBalance= document.querySelector('.savings_balance');

var checkBalance = '50000';


var makeWidthdrawal= function(){

  if(+savInput.value < +savBalance.textContent+1){
    savBalance.textContent = (+savBalance.textContent - +savInput.value).toString();
    savInput.value ='';
  }

  else if(+savInput.value < +savBalance.textContent+ +checkBalance+1){
    checkBalance = (checkBalance -(+savInput.value - +savBalance.textContent)).toString();
    savBalance.textContent ='0';
    savInput.value ='';
  }

  if(+savBalance.textContent === 0){
    document.querySelector('.savings_box').style.backgroundColor = 'red';
  }

}

var makeDeposit= function(){
    savBalance.textContent = (+savBalance.textContent + +savInput.value).toString();
    savInput.value ='';

    if(+savBalance.textContent !== 0){
      document.querySelector('.savings_box').style.backgroundColor = 'mistyrose';
    }
}


savWidBtn.addEventListener('click', function(){
  makeWidthdrawal(savWidBtn);
});









//savDepBtn.addEventListener('click', makeDeposit);

//the version for calling all of the buttons

// var allBanking = function(event){
//   banking(event.target);
// }
//
//
// var banking = function(button){
//   if (button === document.querySelector('.savings_deposit')){
//   var balance =
//   }
//
//
//
//   var newBalance = deposit(balance, input);
//   updateUI(*, newBalance);
// }


// might have to keep the background color info in the html if it's going to be changed
// back and forth

// pass the button to the function, do an if else statement, could also do
// an if else statement for deposit and withdrawal
//





var widthdraw = function(balance, amount){
  if(balance > amount+1){
  return balance- amount;
  }
}

var deposit = function(balance, amount){
  return balance + amount;
}

var upDateUI = function(account, balance){
  //clear input
  //update amount
  //change background;
}


// separate the banking logic from interacting with the DOM
// deposit and widthdrawal functions return the new balance

// var savingsAccount ={
//   balance: 0,
//   deposit: function(){},
// }

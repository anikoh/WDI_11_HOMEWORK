
var widthdraw = function(balance, amount){
  if(balance > amount+1){
  return balance- amount;
  }
}

var deposit = function(balance, amount){
  return balance + amount;
}

//overdraft needs to have access to
// -both balances
// -to know which one is the overdraft (just order of arguments to the function)
// -return the amount of the overdraft, the original balance is 0

var overdraft = function(balance1, balance2, amount){

}

// sometimes you have to update both balance values
// but I can just call the function twice, that's fine
//
//

var updateUI = function(balance){

  //input.value ='';    ////////!!!!!!!
  document.querySelector('.savings_balance').value = balance.toString();  ///!!!!!



  if(+balance.textContent === 0){     /////////!!!!!!!!!
    document.querySelector('.savings_box').className = 'overdraft';
  }

  else {
    document.querySelector('.savings_box').className = '';
  }
  //clear input
  //update amount
  //change background;
}






var savWidBtn= document.querySelector('.savings_withdraw');
var savDepBtn= document.querySelector('.savings_deposit');
var savBalance= Number(document.querySelector('.savings_balance').textContent);


var checkWidBtn= document.querySelector('.checking_withdraw');
var checkDepBtn= document.querySelector('.checking_deposit');
var checkBalance= Number(document.querySelector('.savings_balance').textContent);




savWidBtn.addEventListener('click', function(){
  var input= Number(document.querySelector('.savings_input').value);
  savBalance = widthdraw(savBalance, input);
  updateUI(savBalance);
});

checkWidBtn.addEventListener('click', function(){
  var input= Number(document.querySelector('.checking_input').value);
  checkBalance= widthdraw(checkBalance, input);
  updateUI(checkBalance);
});

savDepBtn.addEventListener('click', function(){
  var input= Number(document.querySelector('.savings_input').value);
  savBalance= deposit(savBalance, input);
  updateUI(savBalance);
});

checkDepBtn.addEventListener('click', function(){
  var input= Number(document.querySelector('.checking_input').value);
  checkBalance= deposit(checkBalance, input);
  updateUI(checkBalance);
});

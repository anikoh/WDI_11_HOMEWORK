
var deposit = function(balance, input){
  return balance + input;
}

var widthdraw = function(balance, input){
  return balance- input;
}

var overdraft = function(balance1, balance2, amount){
  return balance2 -(amount-balance1);
}


var updateBackground = function(account){

  if (document.querySelector('.savings_withdraw') === account.widBtn){
    if(+account.balance.textContent === 0){
    document.querySelector('.savings_input').style.backgroundColor = 'red';
    }
    else {
    document.querySelector('.savings_input').style.backgroundColor = 'white';
    }
  }
  else{
    if(+account.balance.textContent === 0){
    document.querySelector('.checking_input').style.backgroundColor = 'red';
    }
    else {
    document.querySelector('.checking_input').style.backgroundColor = 'white';
    }
  }

}


var savingsAccount = {
  balance: document.querySelector('.savings_balance'),
  widBtn: document.querySelector('.savings_withdraw'),
  depBtn: document.querySelector('.savings_deposit'),
};

var checkingAccount = {
  balance: document.querySelector('.checking_balance'),
  widBtn: document.querySelector('.checking_withdraw'),
  depBtn: document.querySelector('.checking_deposit'),
};



document.body.addEventListener('click', function(event){

  var account;
  var overdraftAccount;
  var input;

  if(event.target.parentElement.className === 'savings'){
    account = savingsAccount;
    overdraftAccount = checkingAccount;
    input= +document.querySelector('.savings_input').value;
  }
  else if(event.target.parentElement.className === 'checking'){
    account = checkingAccount;
    overdraftAccount = savingsAccount;
    input= +document.querySelector('.checking_input').value;
  }


  if(event.target === account.depBtn){
    account.balance.textContent = (deposit(+account.balance.textContent, input)).toString();
  }

  else if(event.target === account.widBtn){
    if(+account.balance.textContent >= input){
      account.balance.textContent = (widthdraw(+account.balance.textContent, input)).toString();
    }
    else if(+account.balance.textContent + +overdraftAccount.balance.textContent >= input){
      overdraftAccount.balance.textContent = (overdraft(+account.balance.textContent, +overdraftAccount.balance.textContent, input)).toString();
      account.balance.textContent = '0';
      updateBackground(overdraftAccount);
    }

  }
updateBackground(account);

});

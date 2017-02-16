

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


savWidBtn.addEventListener('click', makeWidthdrawal);

savDepBtn.addEventListener('click', makeDeposit);











//

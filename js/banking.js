// Handle Deposit Button Event
document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited
   const depositInput=document.getElementById('deposit-input');
   const newDepositAmountText=depositInput.value;
   const newDepositAmount=parseFloat(newDepositAmountText);
//    update deposit total
   const depositTotal=document.getElementById('deposit-total');
   const previousDepositText=depositTotal.innerText;
   const previousDepositAmount =parseFloat(previousDepositText)
   const newDepositTotal =parseFloat(previousDepositAmount+newDepositAmount);
   depositTotal.innerText=newDepositTotal;

// Update Account Balance
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal=previousBalanceTotal+newDepositAmount;
balanceTotal.innerText=newBalanceTotal;


//    Clear deposit input field
   
  depositInput.value=''
})

// Handle Withdraw Event Handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get the amount withdraw
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText);

    // set the amount withdraw total
    const withdrawTotal =document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);

    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;

    // update withdraw total

    withdrawTotal.innerText=newWithdrawTotal;

    // update balance
    const balanceTotal=document.getElementById('balance-total');
        const previousBalanceText=balanceTotal.innerText;
        const previousBalanceTotal=parseFloat(previousBalanceText);
        const newBalanceTotal =previousBalanceTotal-newWithdrawAmount;
        balanceTotal.innerText=newBalanceTotal;

    // clear withdraw input
    withdrawInput.value='';
   
   
})
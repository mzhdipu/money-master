function getElementById(elementId, isInnterText){
    let getElementId = document.getElementById(elementId);
    let getElementInnterText;

        if(isInnterText === true){
            getElementInnterText = parseInt(getElementId.value);
        }else{
            getElementInnterText = getElementId;
        }
    return getElementInnterText;
}

document.getElementById("claculate").addEventListener("click", function(){

    // All Expenses 
    let food = getElementById("food", true);
    let rent = getElementById("rent", true);
    let clothes = getElementById("clothes", true);
    
    // Total Expenses
    let totalExpenses = food + rent + clothes; 
    let getTotalExpenses = getElementById("total-expenses", false);
    getTotalExpenses.innerText = Number(totalExpenses);

    // Balance
    let income = getElementById("income", true);
    let balance = getElementById("balance", false);
    let totalBalance = income - totalExpenses;
    let totalBalanceAmount = totalBalance
    balance.innerText = totalBalanceAmount;
    
    


    document.getElementById("save-btn").addEventListener("click", function(){
        
        // Saving Amount
        let save = getElementById("save", true);
        let savingAmount = getElementById("saving-amount", false);
        let totalSavingAmount = (totalBalanceAmount / save) / 100;
        savingAmount.innerText = totalSavingAmount
        
        // Reamaining Balance
        let remaningBalance = getElementById("remaning-balance", false);
        let finalTotalAmount = totalBalanceAmount - totalSavingAmount;
        remaningBalance.innerText = finalTotalAmount
        

    })
  
})



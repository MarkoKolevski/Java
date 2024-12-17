function atmWithdraw(accountBalance, withdrawalAmount) {
    if (withdrawalAmount > accountBalance) {
        return "Not enough money";
    }
    accountBalance -= withdrawalAmount;
    return `You withdrew $${withdrawalAmount}. Remaining balance: $${accountBalance}`;
}
let balance = 500;
//withdraw 200$
console.log(atmWithdraw(balance, 200));
//withdraw 600$
console.log(atmWithdraw(balance, 600));
"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0;
    }
    Deposit(amount) {
        this.balanceInit += amount;
    }
    Deposit2(amount) {
        this.balanceInit += amount;
    }
    Withdraw(amount) {
        this.balanceInit -= amount;
    }
    Withdraw2(amount) {
        this.balanceInit -= amount;
    }
}
class MotherAccount {
    constructor() {
        this.balanceInit = 0;
    }
    Deposit(amount) {
        this.balanceInit += amount;
    }
    Deposit2(amount) {
        this.balanceInit += amount;
    }
    Withdraw(amount) {
        this.balanceInit -= amount;
    }
    Withdraw2(amount) {
        this.balanceInit -= amount;
    }
    addInterest(account) {
        this.balanceInit *= 0.10;
        console.log(this.balanceInit);
        console.log(account.balanceInit);
    }
}
let newSonAccount = new SonAccount();
let newMotherAccount = new MotherAccount();
newMotherAccount.Deposit(100);
console.log(newMotherAccount.balanceInit);
newMotherAccount.Deposit2(200);
newMotherAccount.addInterest(newSonAccount);

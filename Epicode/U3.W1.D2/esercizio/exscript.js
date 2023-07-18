"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0;
    }
    Deposit(amount) {
        this.balanceInit += amount;
        console.log(this.balanceInit);
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
const btnMomDep = document.getElementById("btn-mom-dep");
const btnMomWith = document.getElementById("btn-mom-with");
const btnSonDep = document.getElementById("btn-son-dep");
const btnSonWith = document.getElementById("btn-son-with");
const btnMomShow = document.getElementById("btn-mom-show");
const btnSonShow = document.getElementById("btn-son-show");
const spanMom = document.getElementById("span-mom");
const spanSon = document.getElementById("span-son");
btnMomDep.addEventListener("click", () => {
    const depMomInput = parseInt(document.getElementById("mom-dep").value);
    newMotherAccount.Deposit(depMomInput);
});
btnMomWith.addEventListener("click", () => {
    const withMomInput = parseInt(document.getElementById("mom-with").value);
    newMotherAccount.Withdraw(withMomInput);
});
btnSonDep.addEventListener("click", () => {
    const depSonInput = parseInt(document.getElementById("son-dep").value);
    newSonAccount.Deposit(depSonInput);
});
btnSonWith.addEventListener("click", () => {
    const withSonInput = parseInt(document.getElementById("son-with").value);
    newSonAccount.Withdraw(withSonInput);
});

class SonAccount{
    public balanceInit:number = 0
    Deposit(amount:number){
       this.balanceInit += amount
    }
    Deposit2(amount:number){
        this.balanceInit += amount
    }
    Withdraw(amount:number){
        this.balanceInit -= amount
    }
    Withdraw2(amount:number){
        this.balanceInit -= amount
    }
}

class MotherAccount{
    public balanceInit:number = 0
    Deposit(amount:number){
       this.balanceInit += amount
    }
    Deposit2(amount:number){
        this.balanceInit += amount
    }
    Withdraw(amount:number){
        this.balanceInit -= amount
    }
    Withdraw2(amount:number){
        this.balanceInit -= amount
    }
    addInterest(account:SonAccount){
       this.balanceInit *= 0.10
       console.log(this.balanceInit)
       console.log(account.balanceInit)
     }
}
let newSonAccount = new SonAccount()
let newMotherAccount = new MotherAccount()




const btnMomDep = <HTMLButtonElement>document.getElementById("btn-mom-dep");
const btnMomWith = <HTMLButtonElement>document.getElementById("btn-mom-with");
const btnSonDep = <HTMLButtonElement>document.getElementById("btn-son-dep");
const btnSonWith = <HTMLButtonElement>document.getElementById("btn-son-with");
const btnMomShow = <HTMLButtonElement>document.getElementById("btn-show-mom");
const btnSonShow = <HTMLButtonElement>document.getElementById("btn-show-son");
const spanMom = <HTMLSpanElement>document.getElementById("span-mom");
const spanSon = <HTMLSpanElement>document.getElementById("span-son");

btnMomDep.addEventListener("click", () => {
    const depMomInput:number = parseInt((<HTMLInputElement>document.getElementById("mom-dep")).value);
    newMotherAccount.Deposit(depMomInput);
    console.log(newMotherAccount.balanceInit);
})

btnMomWith.addEventListener("click", () => {
    const withMomInput:number = parseInt((<HTMLInputElement>document.getElementById("mom-with")).value);
    newMotherAccount.Withdraw(withMomInput);
})

btnSonDep.addEventListener("click", () => {
    const depSonInput:number = parseInt((<HTMLInputElement>document.getElementById("son-dep")).value);
    newSonAccount.Deposit(depSonInput);
})

btnSonWith.addEventListener("click", () => {
    const withSonInput:number = parseInt((<HTMLInputElement>document.getElementById("son-with")).value);
    newSonAccount.Withdraw(withSonInput);
})

btnMomShow.addEventListener("click", () => {
    spanMom.innerHTML = newMotherAccount.balanceInit.toString();
})
btnSonShow.addEventListener("click", () => {
    spanSon.innerHTML = newSonAccount.balanceInit.toString();
})
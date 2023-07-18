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
newMotherAccount.Deposit(100)
console.log(newMotherAccount.balanceInit);
newMotherAccount.Deposit2(200)
newMotherAccount.addInterest(newSonAccount)

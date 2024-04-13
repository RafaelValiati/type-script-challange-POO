
export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
    

    constructor(name: string, accountNumber: number){
        this.name=name;
        this.accountNumber = accountNumber;
    }

    setBalance = (value: number): void =>{
        this.balance = value;
    
    }

    
    getName = (): string => {
        return this.name;
    }

    getBalance = (): number => {
        return this.balance;
    }
    
    validateAccount = (): boolean => {
        if(this.status){
            return true
        } else {
            return false
        }
    }

    validateBalance = (value: number): boolean => {
        if(value>this.balance){
            return false
        } else {
            return true
        }
    }


    deposit = (value: number): void => {
        if(this.validateAccount()){
            this.balance = this.balance + value
            console.log("Deposito realizado com sucesso!")
        } else {
            throw new Error('Deposito negado!')
        }
    }

    withdraw = (value: number): void => {
        if(this.validateAccount() && this.validateBalance(value)){
            this.balance = this.balance - value
            console.log("Saque realizado com sucesso!")
        } else {
            throw new Error('Saque negado!')
        }
    }




}
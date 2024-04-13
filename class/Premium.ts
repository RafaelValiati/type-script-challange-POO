import { DioAccount } from "./DioAccount";



export class PremiumAccount extends DioAccount{

    constructor(name: string, numberAccount: number){
        super(name, numberAccount)


    }

    deposit = (value: number): void => {
        if(this.validateAccount()){
            let assistent: number = value + this.getBalance() + 10
            this.setBalance(assistent)
            console.log("Deposito realizado com sucesso!")
        } else {
            throw new Error('Deposito negado!')
        }
    }


}
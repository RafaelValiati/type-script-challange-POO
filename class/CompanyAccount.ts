import { DioAccount } from "./DioAccount";


export class CompanyAccount extends DioAccount{


    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (loan: number) => {
        if(this.validateAccount()){
            let assistant = this.getBalance() + loan
            this.setBalance(assistant);
            console.log("Emprestimo feito com sucesso!")
        } else {
            console.log('Conta inválida')
        }
    }


}

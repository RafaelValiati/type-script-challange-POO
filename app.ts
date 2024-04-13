import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { PremiumAccount } from './class/Premium';


const dioAccount: PeopleAccount = new PeopleAccount(10, "joe",1010101);

console.log(dioAccount.getName());
console.log(dioAccount.getBalance());
dioAccount.deposit(1000);
console.log(dioAccount.getBalance());
dioAccount.withdraw(500);
console.log(dioAccount.getBalance());

const companyAccount = new CompanyAccount("Company XYZ", 654321);

console.log(companyAccount.getName());
console.log(companyAccount.getBalance());
companyAccount.deposit(2000);
console.log(companyAccount.getBalance());
companyAccount.getLoan(500);
console.log(companyAccount.getBalance());

const premiumAccount = new PremiumAccount("Premium User", 987654);

console.log(premiumAccount.getName());
console.log(premiumAccount.getBalance());
premiumAccount.deposit(3000);
console.log(premiumAccount.getBalance());



import { Customer } from './customer';

export class Account {
    accountId:string;
    accountName:string;
    accountStatus:string;
    accountBalance:string
    createdDt:string
    customer:Customer = new Customer();
    lastUpdated:string;
}

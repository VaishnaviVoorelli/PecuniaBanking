import { Branch } from './branch';

export class Customer {
    customerId:string;
    customerName:string;
    password:string;
    role:string;
    customerAddress:string;
    customerAadhar:string;
    customerPan:string;
    customerContact:string;
    customerGender:string;
    branch:Branch = new Branch();
    customerDob:string;
}

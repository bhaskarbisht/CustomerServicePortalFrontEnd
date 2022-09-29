import { Address } from "./Address";

export default class Customer {
  customerId:number;
  firstName:string;
  lastName:string;
  email :string;
  panNo :string;
  dob :string;
  contactNo :string;
  password :string;
  address:Address=new Address();
}

class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "123");
customer.name = "Ziya Karagoz";
console.log(customer);

class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}

class CompanyCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}

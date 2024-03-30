class Account {
    constructor(balance, name, type) {
      this.balance = balance;
      this.name = name;
      this.type = type;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  
    summary() {
      return {
        balance: this.balance,
        name: this.name,
        type: this.type
      };
    }
  }

  const account = new Account(100, "Surendra", "Checking");

account.deposit(50);
console.log(account.summary()); 

account.withdraw(25);
console.log(account.summary()); 
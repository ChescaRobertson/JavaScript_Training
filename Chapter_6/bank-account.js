class Account {
  constructor(name, number, balance) {
    this.name = name;
    this.number = number;
    this.balance = balance;
  }

  deposit(amount) {
    return (this.balance += amount);
  }

  withdraw(amount) {
    return (this.balance -= amount);
  }

  display() {
    return `
    Name: ${this.name}
    Account Number: ${this.number}
    Account Balance: ${this.balance}`;
  }
}

const a1 = new Account('Bob', 12345678, 1000);
const a2 = new Account('Fred', 98765432, 100);

a1.deposit(100);
a2.deposit(50);

console.log(a1.display());
console.log(a2.display());

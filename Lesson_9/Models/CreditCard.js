export default class CreditCard {
  constructor(balance, account, owner, isOverdraft = false) {
    this.balance = balance;
    this.account = account;
    this.owner = owner;
    this.isOverdraft = isOverdraft;
  }

  get cardBalance() {
    return this.balance;
  }

  set cardBalance(value) {
    if (value < 0 && !this.isOverdraft) return;
    this.balance = value;
  }

  get overdraft() {
    return this.isOverdraft;
  }
}

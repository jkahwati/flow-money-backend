const TransactionRepository = require ('../repositories/transactions.repository')
const AccountRepository = require ('../repositories/accounts.repository');
const Account = require('../model/user.model');


module.exports =  class TransactionService {

    constructor() {}

    async saveTransaction(transaction) {
        const transactionRepository = new TransactionRepository();
        const accountRepository = new AccountRepository();
        await transactionRepository.saveTransaction(transaction);
        let account = await accountRepository.findOne({id: transaction.accountId});
        if (transaction.type === "INCOME") {
            account.balance += transaction.amount;
        } else {
            account.balance -= transaction.amount;
        }
        await accountRepository.findOneAndUpdate({id: transaction.accountId}, account)

    }
}
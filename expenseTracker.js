const account = {
    name: "Danny Libor",
    expenses: [],
    addExpense: function (description, amount) {
        account.expenses.push({
            description: description,
            amount: amount
        })
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// get AccountSummary - total up all expenses: 
//   -> Andrew Mead has $1250 in expenses









account.addExpense("Rent", 350)
account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
//console.log(account.getAccountSummary())
console.log(account)
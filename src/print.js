function printOwing(invoice) {
  let outstanding = 0;

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(createOwing(invoice, outstanding));
  
  return createOwing(invoice, outstanding)
}
function createOwing(invoice, outstanding) {
  let result = `***********************\n`
    + `**** Customer Owes ****\n`
    + `***********************\n`
    + `name: ${invoice.customer}\n`
    + `amount: ${outstanding}\n`
    + `amount: ${invoice.dueDate.toLocaleDateString()}`
  return result
}
module.exports = {
  printOwing
}
const invoice = {
  customer: 'David',
  dueDate: '',
  borderSpacing:[
    {
      amount:5
    },
    {
      amount:10
    },
    {
      amount:15
    }
  ]
}
printOwing(invoice)



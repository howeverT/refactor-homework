const printTest = require('ava');
const { printOwing } = require('../src/print')

printTest('Case 1,should return owes given David and amount 5,10,15', t => {
    //given
    const invoice = {
        customer: 'David',
        dueDate: '',
        borderSpacing: [
            {
                amount: 5
            },
            {
                amount: 10
            },
            {
                amount: 15
            }
        ]
    }
    //when
    let result = printOwing(invoice)
    //then
    t.is('***********************\n**** Customer Owes ****\n***********************\nname: David\namount: 30\namount: 9/27/2020', result);
});
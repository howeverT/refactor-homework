const deliveryTest = require('ava');
const { deliveryDate } = require('../src/delivery')

deliveryTest('Case 1,should return 2 given isRush true and deliveryState MA', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'MA',
        placedOn:{
            plusDays:(time)=>{
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 2);
});

deliveryTest('Case 2,should return 3 given isRush true and deliveryState NY', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'NY',
        placedOn:{
            plusDays:(time)=>{
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 3);
});
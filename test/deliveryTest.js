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

deliveryTest('Case 3,should return 4 given isRush true and deliveryState AA', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'AA',
        placedOn:{
            plusDays:(time)=>{
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 4);
});

deliveryTest('Case 4,should return 4 given isRush false and deliveryState MA', t => {
    const isRush = false;
    const anorder = {
        deliveryState: 'MA',
        placedOn:{
            plusDays:(time)=>{
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 4);
});
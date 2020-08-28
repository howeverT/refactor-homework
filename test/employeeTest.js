const employeeTest = require('ava');
const { Employee } = require('../src/employee')

employeeTest('Case 1,type is engineer', t => {
    //given
    let employee = new Employee('Ben', 'engineer')
    //when
    let result = employee.toString();
    //then
    t.is('Ben (engineer)', result);
});

employeeTest('Case 2,type is manager', t => {
    //given
    let employee = new Employee('Ben', 'manager')
    //when
    let result = employee.toString();
    //then
    t.is('Ben (manager)', result);
});

employeeTest('Case 3,Employee cannot be of type manager1', t => {
    //given

    //when
    try {
        let employee = new Employee('Ben', 'manager1')
        t.fail();
    }
    catch (e) {
        t.is(e.message, 'Employee cannot be of type manager1')
    }
});
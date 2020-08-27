const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('Case 1,should return B given length 20 and history 1', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);

});
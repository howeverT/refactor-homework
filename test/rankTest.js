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

rankTest('Case 2,should return A when given voyage with china and length 12 and history length 15 ', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    },
    {
      zone: 'A',
      profit: 7,
    },
    {
      zone: 'B',
      profit: 4,
    },
    {
      zone: 'C',
      profit: 3,
    },
    {
      zone: 'D',
      profit: 2,
    },{
      zone: 'E',
      profit: 7,
    },
    {
      zone: 'F',
      profit: 8,
    },
    {
      zone: 'G',
      profit: 9,
    },
    {
      zone: 'H',
      profit: 2,
    },
    {
      zone: 'I',
      profit: 1,
    },{
      zone: 'J',
      profit: 1,
    },
    {
      zone: 'K',
      profit: 4,
    },
    {
      zone: 'L',
      profit: 1,
    },
    {
      zone: 'M',
      profit: 1,
    },
    {
      zone: 'N',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('A', result);
})


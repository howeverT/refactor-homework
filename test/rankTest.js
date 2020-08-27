const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('Case 1,should return B given voyage length 20 and history length 1', t => {
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

rankTest('Case 3,should return B given east-indies and length 12 and history length 12 with no east-indies', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'A',
      profit: 1,
    },
    {
      zone: 'B',
      profit: 1,
    },
    {
      zone: 'C',
      profit: 1,
    },
    {
      zone: 'D',
      profit: 1,
    },
    {
      zone: 'E',
      profit: 1,
    },
    {
      zone: 'F',
      profit: 1,
    },
    {
      zone: 'G',
      profit: 1,
    },
    {
      zone: 'H',
      profit: 1,
    },
    {
      zone: 'I',
      profit: 1,
    },
    {
      zone: 'J',
      profit: 1,
    },
    {
      zone: 'K',
      profit: 1,
    },
    {
      zone: 'L',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

rankTest('Case 4,should return B given length 10 and history length 4 with west-indies', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);

});

rankTest('Case 5,should return B when given voyage with china and length 12 and history length 8 with no china ', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [
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
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})
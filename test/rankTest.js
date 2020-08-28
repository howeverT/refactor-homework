const rankTest = require('ava');
const {voyageProfitFactor, voyageRisk, captainHistoryRisk,rating} = require('../src/rank')

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

rankTest('Case 6,should return 3 given voyageProfitFactor voyage.zone=china and voyage.length=13 and history is null',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = []
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
  })

  rankTest('Case 7,should return 7 given voyage.zone is china and voyage.length is 13 and history has china and history.length is 10',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = new Array(10);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
  })

  rankTest('Case 8,should return 8 given voyage.zone is china and voyage.length is 18 and history has china and history.length is 11',
  t => {
    const voyage = {
      zone: 'china',
      length: 18
    }
    const history = new Array(11);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 8);
  })

  rankTest('Case 9,should return 2 given voyage.zone is west-indies and voyage.length is 15 and history has china and history.length is 9',
  t => {
    const voyage = {
      zone: 'west-indies',
      length: 15
    }
    const history = new Array(9);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
  })
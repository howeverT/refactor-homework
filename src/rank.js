function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if (isIncludeMainland(voyage)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function isIncludeMainland(voyage) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (isChina(voyage) && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function isChina(voyage) {
  return voyage.zone === 'china';
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result = calculateLength(10, history.length, result)
    result = calculateLength(12, voyage.length, result)
    result = calculateLength(18, voyage.length, result)
  }
  else {
    result = calculateLength(8, history.length, result)
    result = calculateLength(14, voyage.length, result)
  }
  return result;
}

var strategies = {
  10: function (result, length) {
    return length > 10 ? result += 1 : result;
  },
  12: function (result, length) {
    return length > 12 ? result += 1 : result;
  },
  18: function (result, length) {
    return length > 18 ? result -= 1 : result;
  },
  8: function (result, length) {
    return length > 8 ? result += 1 : result;
  },
  14: function (result, length) {
    return length > 14 ? result -= 1 : result;
  }
};

var calculateLength = function (strategy, length, result) {
  return strategies[strategy](result, length);
};

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  rating,
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

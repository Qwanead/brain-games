import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const getInput = () => ([
  getRndInteger(MIN_NUM, MAX_NUM),
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a, b]) => (`${a} ${b}`);

const getCorrectAnswer = ([a, b]) => {
  let m = a;
  let n = b;
  let result;

  while (m !== 0 && n !== 0) {
    if (m < n) {
      [m, n] = [n, m];
    }

    result = n;
    m %= n;
  }

  return result;
};

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

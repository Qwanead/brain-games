import { getRndInteger } from '../utils.js';
import { MAX_NUM_GCD, MIN_NUM_GCD } from '../settings.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const getInput = () => ([
  getRndInteger(MIN_NUM_GCD, MAX_NUM_GCD),
  getRndInteger(MIN_NUM_GCD, MAX_NUM_GCD),
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

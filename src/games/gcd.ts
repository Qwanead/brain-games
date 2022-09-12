import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const getInput = (): [number, number] => ([
  getRndInteger(MIN_NUM, MAX_NUM),
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a, b]: [number, number]) => (`${a} ${b}`);

const getCorrectAnswer = ([a, b]: [number, number]) => {
  let m = a;
  let n = b;
  let result = null;

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

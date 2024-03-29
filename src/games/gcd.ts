import BrainGame from './BrainGame.js';
import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';
import Rule from '../Rule.js';

const getInput = (): [number, number] => ([
  getRndInteger(MIN_NUM, MAX_NUM),
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a, b]: [number, number]) => (`${a} ${b}`);

const getCorrectAnswer = ([a, b]: [number, number]) => {
  let m = a;
  let n = b;
  let result = n;

  while (m !== 0 && n !== 0) {
    if (m < n) {
      [m, n] = [n, m];
    }

    result = n;
    m %= n;
  }

  return result;
};

export default new BrainGame({
  rule: Rule.GCD,
  getInput,
  getQuestion,
  getCorrectAnswer,
});

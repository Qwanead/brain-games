import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../const.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getInput = () => ([
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a]) => (`${a}`);

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

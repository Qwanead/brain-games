import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getInput = (): [number] => ([
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([num]: [number]) => (`${num}`);

const getCorrectAnswer = ([num]: [number]) => (
  num % 2 === 0 ? 'yes' : 'no'
);

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

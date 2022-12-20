import BrainGame from './BrainGame.js';
import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';
import Rule from '../Rule.js';

const getInput = (): [number] => ([
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([num]: [number]) => (`${num}`);

const getCorrectAnswer = ([num]: [number]) => (
  num % 2 === 0 ? 'yes' : 'no'
);

export default new BrainGame({
  rule: Rule.EVEN,
  getInput,
  getQuestion,
  getCorrectAnswer,
});

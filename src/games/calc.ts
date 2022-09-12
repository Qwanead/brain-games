import BrainGame from './BrainGame.js';
import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM, OPERATORS } from '../settings.js';

const RULE = 'What is the result of the expression?';

type Operator = typeof OPERATORS[number];

const getInput = (): [number, Operator, number] => ([
  getRndInteger(MIN_NUM, MAX_NUM),
  OPERATORS[getRndInteger(0, OPERATORS.length - 1)],
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a, operator, b]: [number, Operator, number]) => (`${a} ${operator} ${b}`);

const getCorrectAnswer = ([a, operator, b]: [number, Operator, number]) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return Infinity;
  }
};

export default new BrainGame({
  rule: RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
});

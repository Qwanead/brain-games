import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM, OPERATORS } from '../settings.js';

const RULE = 'What is the result of the expression?';

const getInput = () => ([
  getRndInteger(MIN_NUM, MAX_NUM),
  OPERATORS[getRndInteger(0, OPERATORS.length - 1)],
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([a, operator, b]) => (`${a} ${operator} ${b}`);

const getCorrectAnswer = ([a, operator, b]) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

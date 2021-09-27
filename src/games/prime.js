import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM } from '../settings.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getInput = () => ([
  getRndInteger(MIN_NUM, MAX_NUM),
]);

const getQuestion = ([num]) => (`${num}`);

const getCorrectAnswer = ([num]) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

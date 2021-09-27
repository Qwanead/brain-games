import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM, SEQUENCE_LENGTH } from '../settings.js';

const RULE = 'What number is missing in the progression?';

const getInput = () => {
  const startSequnce = getRndInteger(MAX_NUM, MIN_NUM);
  const sequenceStep = getRndInteger(MAX_NUM, MIN_NUM);
  const result = [startSequnce];

  for (let i = 1; i < SEQUENCE_LENGTH; i += 1) {
    result.push(result[i - 1] + sequenceStep);
  }

  const missElementIndex = getRndInteger(0, SEQUENCE_LENGTH - 1);
  result.unshift(result[missElementIndex]);
  result[missElementIndex + 1] = '..';

  return result;
};

const getQuestion = (sequence) => (sequence.slice(1).join(' '));

const getCorrectAnswer = (sequence) => (sequence[0]);

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

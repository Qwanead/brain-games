import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM, SEQUENCE_LENGTH } from '../settings.js';

const RULE = 'What number is missing in the progression?';

type Progression = [number, ...(number | '..')[]];

const getInput = (): Progression => {
  const startSequnce = getRndInteger(MAX_NUM, MIN_NUM);
  const sequenceStep = getRndInteger(MAX_NUM, MIN_NUM);
  const sequence = [startSequnce];

  for (let i = 1; i < SEQUENCE_LENGTH; i += 1) {
    sequence.push(sequence[i - 1] + sequenceStep);
  }

  const missElementIndex = getRndInteger(0, SEQUENCE_LENGTH - 1);
  sequence.unshift(sequence[missElementIndex]);
  const result: Progression = [
    sequence[missElementIndex],
    ...sequence.slice(1, missElementIndex),
    '..',
    ...sequence.slice(missElementIndex + 1, sequence.length),
  ];

  return result;
};

const getQuestion = (sequence: Progression) => (sequence.slice(1).join(' '));

const getCorrectAnswer = (sequence: Progression): number => (sequence[0]);

export {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
};

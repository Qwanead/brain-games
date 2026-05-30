import BrainGame from './BrainGame.js';
import { getRndInteger } from '../utils.js';
import { MAX_NUM, MIN_NUM, SEQUENCE_LENGTH } from '../settings.js';
import Rule from '../Rule.js';

type Progression = [number, ...(number | '..')[]];

const getInput = (): Progression => {
  const startSequnce = getRndInteger(MIN_NUM, MAX_NUM);
  const sequenceStep = getRndInteger(MIN_NUM, MAX_NUM);
  const sequence = [startSequnce];

  for (let i = 1; i < SEQUENCE_LENGTH; i += 1) {
    sequence.push(sequence[i - 1] + sequenceStep);
  }

  const missElementIndex = getRndInteger(0, SEQUENCE_LENGTH - 1);
  const hiddenValue = sequence[missElementIndex];
  const result: Progression = [
    hiddenValue,
    ...sequence.slice(0, missElementIndex),
    '..',
    ...sequence.slice(missElementIndex + 1),
  ];

  return result;
};

const getQuestion = (sequence: Progression) => (sequence.slice(1).join(' '));

const getCorrectAnswer = (sequence: Progression): number => (sequence[0]);

export default new BrainGame({
  rule: Rule.PROGRESSION,
  getInput,
  getQuestion,
  getCorrectAnswer,
});

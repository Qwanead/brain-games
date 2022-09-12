import readValue from './cli.js';
import { printGreeting } from './utils.js';
import { NUM_OF_ATTEMPTS } from './settings.js';

const startTry = (question: string, correctAnswer: string, name: string): boolean => {
  console.log(`Question: ${question}`);
  const answer = readValue('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const startGame = <T>(
  rule: string,
  getInput: () => T,
  getQuestion: (arr: T) => string,
  getCorrectAnswer: (str: T) => number | null | 'yes' | 'no',
) => {
  let currentTry = 1;
  let isAnswerCorrect = true;
  const name = printGreeting();
  console.log(rule);

  while (currentTry <= NUM_OF_ATTEMPTS && isAnswerCorrect) {
    const input = getInput();
    const question = getQuestion(input);
    const correctAnswer = String(getCorrectAnswer(input));

    isAnswerCorrect = startTry(question, correctAnswer, name);
    currentTry += 1;
  }

  if (isAnswerCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;

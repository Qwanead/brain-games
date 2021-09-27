import readValue from './cli.js';
import { printGreeting } from './utils.js';
import { TRIES_COUNT } from './const.js';

const startTry = (question, correctAnswer, name) => {
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

const startGame = (rule, getInput, getQuestion, getCorrectAnswer) => {
  let currentTry = 1;
  let isAnswerCorrect = true;
  const name = printGreeting();
  console.log(rule);

  while (currentTry <= TRIES_COUNT && isAnswerCorrect) {
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

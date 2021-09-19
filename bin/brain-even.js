#!/usr/bin/env node

import { printGreeting, getRndInteger } from '../src/utils.js';
import readValue from '../src/cli.js';

const TRIES_COUNT = 3;
const MIN_NUM = 1;
const MAX_NUM = 15;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => {
  const name = printGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = TRIES_COUNT; i > 0; i -= 1) {
    const number = getRndInteger(MIN_NUM, MAX_NUM);

    console.log(`Question: ${number}`);
    const answer = readValue('Your answer: ');
    const correctAnswer = isEven(number);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

startEvenGame();

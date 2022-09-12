#!/usr/bin/env node

import startGame from '../src/index.js';
import {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
} from '../src/games/gcd.js';

startGame(RULE, getInput, getQuestion, getCorrectAnswer);

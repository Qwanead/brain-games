#!/usr/bin/env node

import startGame from '../src/index.js';
import {
  RULE,
  getInput,
  getQuestion,
  getCorrectAnswer,
} from '../src/games/prime.js';

startGame(RULE, getInput, getQuestion, getCorrectAnswer);

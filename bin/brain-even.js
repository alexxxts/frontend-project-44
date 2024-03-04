#!/usr/bin/env node
import { whatsName } from '../src/cli.js';
import { checkAnswer } from '../src/even-logic.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${whatsName()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');


#!/usr/bin/env node
import isEven from '../src/even.js';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getUserName();
const resultOfGame = isEven();
console.log(`${resultOfGame}, ${nameOfUser}!`);

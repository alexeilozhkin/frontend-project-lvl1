#!/usr/bin/env node
import getUserCommunication from '../src/index.js';
import { ruleMessage, getPrimeQuestionAndAnswer } from '../src/games/prime.js';

getUserCommunication(ruleMessage, getPrimeQuestionAndAnswer);

#!/usr/bin/env node
import getUserCommunication from '../src/index.js';
import { ruleMessage, getGcdQuestionAndAnswer } from '../src/games/gcd.js';

getUserCommunication(ruleMessage, getGcdQuestionAndAnswer);

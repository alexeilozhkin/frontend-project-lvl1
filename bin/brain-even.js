#!/usr/bin/env node
import getUserCommunication from '../src/index.js';
import { ruleMessage, getEvenQuestionAndAnswer } from '../src/games/even.js';

getUserCommunication(ruleMessage, getEvenQuestionAndAnswer);

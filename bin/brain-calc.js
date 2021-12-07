#!/usr/bin/env node
import getUserCommunication from '../src/index.js';
import { ruleMessage, getExpressionQuestionAndAnswer } from '../src/games/calc.js';

getUserCommunication(ruleMessage, getExpressionQuestionAndAnswer);

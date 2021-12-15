#!/usr/bin/env node
import getUserCommunication from '../src/index.js';
import { ruleMessage, getProgressionQuestionAndAnswer } from '../src/games/progression.js';

getUserCommunication(ruleMessage, getProgressionQuestionAndAnswer);

import getRandomNumber from '../randomNumber.js';
import getUserCommunication from '../index.js';

const ruleMessage = 'What number is missing in the progression?';

const setProgression = (firstNumber, progressionStep, progressionLength) => {
  const progressionArray = [firstNumber];
  let currentNumber = firstNumber;
  for (let i = 0; i < progressionLength - 1; i += 1) {
    currentNumber += progressionStep;
    progressionArray.push(currentNumber);
  }
  return progressionArray;
};

const getProgressionQuestionAndAnswer = () => {
  const progression = setProgression(getRandomNumber(10), getRandomNumber(15), 15);
  const randomIndex = getRandomNumber(progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};

const progressionGame = () => getUserCommunication(ruleMessage, getProgressionQuestionAndAnswer);

export default progressionGame;

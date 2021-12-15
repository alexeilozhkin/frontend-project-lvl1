import getRandomNumber from '../randomNumber.js';

const ruleMessage = 'What number is missing in the progression?';
const getProgressionQuestionAndAnswer = () => {
  let progressionNumber = getRandomNumber(10);
  const progressionStep = getRandomNumber(15);
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += progressionStep;
  }
  const randomIndex = getRandomNumber(progressionLength);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};
export { ruleMessage, getProgressionQuestionAndAnswer };

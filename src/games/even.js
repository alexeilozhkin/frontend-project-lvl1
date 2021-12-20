import getRandomNumber from '../randomNumber.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEvenQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(50);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export { ruleMessage, getEvenQuestionAndAnswer };

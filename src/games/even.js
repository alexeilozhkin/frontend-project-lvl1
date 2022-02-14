import getRandomNumber from '../randomNumber.js';
import getUserCommunication from '../index.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEvenQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(50);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const evenGame = () => getUserCommunication(ruleMessage, getEvenQuestionAndAnswer);

export default evenGame;

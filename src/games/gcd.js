import getRandomNumber from '../randomNumber.js';
import getUserCommunication from '../index.js';

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let firstValue = firstNumber;
  let secondValue = secondNumber;
  let biggestNumber;
  let smallestNumber;
  while (firstValue !== secondValue) {
    biggestNumber = (firstValue > secondValue) ? firstValue : secondValue;
    smallestNumber = (firstValue > secondValue) ? secondValue : firstValue;
    firstValue = smallestNumber;
    secondValue = biggestNumber - smallestNumber;
  }
  return firstValue;
};

const getGcdQuestionAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(100);
  const secondRandomNumber = getRandomNumber(100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstRandomNumber, secondRandomNumber);
  return [question, correctAnswer.toString()];
};

const gcdGame = () => getUserCommunication(ruleMessage, getGcdQuestionAndAnswer);

export default gcdGame;

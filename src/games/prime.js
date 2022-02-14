import getRandomNumber from '../randomNumber.js';
import getUserCommunication from '../index.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = true;
  const value = number;
  if (value <= 3) {
    return result;
  }
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      result = false;
    }
  }
  return result;
};

const getPrimeQuestionAndAnswer = () => {
  const smallestPossibleNumber = 2;
  const questionNumber = getRandomNumber(100) + smallestPossibleNumber;
  const question = questionNumber;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => getUserCommunication(ruleMessage, getPrimeQuestionAndAnswer);

export default primeGame;

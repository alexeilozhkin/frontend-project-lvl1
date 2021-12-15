import getRandomNumber from '../randomNumber.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getPrimeQuestionAndAnswer = () => {
  const questionNumber = getRandomNumber(100);
  const question = questionNumber;
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
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export { ruleMessage, getPrimeQuestionAndAnswer };

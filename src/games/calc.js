import getRandomNumber from '../randomNumber.js';
import getUserCommunication from '../index.js';

const ruleMessage = 'What is the result of the expression?';

const getRandomOperator = () => {
  const possibleOperators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(possibleOperators.length);
  return possibleOperators[randomIndex];
};

const getResultOfExpression = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('error');
  }
};

const getExpressionQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(20);
  const secondNumber = getRandomNumber(20);
  const operator = getRandomOperator();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getResultOfExpression(firstNumber, operator, secondNumber);
  return [expression, correctAnswer.toString()];
};

const calcGame = () => getUserCommunication(ruleMessage, getExpressionQuestionAndAnswer);

export default calcGame;

import getRandomNumber from '../randomNumber.js';

const ruleMessage = 'What is the result of the expression?';

const getExpressionQuestionAndAnswer = () => {
  const getRandomOperator = () => {
    const possibleOperators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(possibleOperators.length);
    return possibleOperators[randomIndex];
  };
  const firstNumber = getRandomNumber(20);
  const secondNumber = getRandomNumber(20);
  const operator = getRandomOperator();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log('error');
  }
  return [expression, correctAnswer.toString()];
};

export { ruleMessage, getExpressionQuestionAndAnswer };

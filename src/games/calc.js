const ruleMessage = 'What is the result of the expression?';

const getExpressionQuestionAndAnswer = () => {
  const getRandomNumber = () => {
    const num = Math.floor(Math.random() * 50);
    return num;
  };
  const getRandomOperator = () => {
    const possibleOperators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * possibleOperators.length);
    return possibleOperators[randomIndex];
  };
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
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

const ruleMessage = 'Find the greatest common divisor of given numbers.';
const getGcdQuestionAndAnswer = () => {
  const getRandomNumber = () => {
    const maxPossibleRandomNumber = 100;
    const resultNumber = Math.floor(Math.random() * maxPossibleRandomNumber);
    return resultNumber;
  };
  const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
    let num1 = firstNumber;
    let num2 = secondNumber;
    let biggestNumber;
    let smallestNumber;
    while (num1 !== num2) {
      biggestNumber = (num1 > num2) ? num1 : num2;
      smallestNumber = (num1 > num2) ? num2 : num1;
      num1 = smallestNumber;
      num2 = biggestNumber - smallestNumber;
    }
    return num1;
  };
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstRandomNumber, secondRandomNumber);
  return [question, correctAnswer.toString()];
};

export { ruleMessage, getGcdQuestionAndAnswer };

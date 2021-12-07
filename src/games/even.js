const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEvenQuestionAndAnswer = () => {
  const maxPossibleRandomNumber = 50;
  const randomNumber = Math.floor(Math.random() * maxPossibleRandomNumber);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export { ruleMessage, getEvenQuestionAndAnswer };

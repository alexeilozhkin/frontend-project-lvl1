import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const maxPossibleRandomNumber = 50;
    const getRandomNumber = Math.floor(Math.random() * maxPossibleRandomNumber);
    console.log(`Question: ${getRandomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (getRandomNumber % 2 === 0) ? 'yes' : 'no';
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return ('Let\'s try again');
    }
  }
  return ('Congratulations');
};
export default isEven;

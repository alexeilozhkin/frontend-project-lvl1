import readlineSync from 'readline-sync';

const getUserCommunication = (rule, setGame) => {
  const roundCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let result = `Congratulations, ${userName}!`;
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 1; i <= roundCount; i += 1) {
    const valueOfSet = setGame();
    const data = valueOfSet[0];
    const expectedAnswer = valueOfSet[1];
    console.log(`Question: ${data}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      result = `Let's try again, ${userName}!`;
      break;
    }
  }
  console.log(result);
};

export default getUserCommunication;

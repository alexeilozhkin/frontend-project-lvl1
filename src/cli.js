import readlineSync from 'readline-sync';

function getUserName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
export default getUserName;

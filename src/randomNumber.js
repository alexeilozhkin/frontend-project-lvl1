const getRandomNumber = (maxPossibleNumber) => {
  const upperLimit = maxPossibleNumber;
  const resultNumber = Math.floor(Math.random() * upperLimit);
  return resultNumber;
};
export default getRandomNumber;

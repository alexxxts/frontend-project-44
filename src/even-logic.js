import readlineSync from 'readline-sync';

export const checkAnswer = () => {
  let number = 0;

  for (let i = 0; i < 3; i += 1) {
    number = Math.random();
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      return false;
    }
  };
  return true;
};

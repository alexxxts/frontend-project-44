import readlineSync from 'readline-sync';

export const checkAnswer = () => {
  let number = 0;
  let answer = '';

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return `Let's try again, ${userName}!`;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

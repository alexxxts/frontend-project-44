import readlineSync from 'readline-sync';

export const checkAnswer = (mainQuestion, randomExp, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let userAnswer = '';

  console.log(`Hello, ${userName}!`);
  console.log(mainQuestion);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomExp}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

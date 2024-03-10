import { checkAnswer } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

export const startPrime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const mathArr = [
    [null, null],
    [null, null],
    [null, null],
  ];

  for (let i = 0; i < 3; i += 1) {
    mathArr[i][0] = Math.round(Math.random() * 100);
    mathArr[i][1] = (isPrime(mathArr[i][0])) ? 'yes' : 'no';
  }
  return console.log(checkAnswer(mainQuestion, mathArr));
};

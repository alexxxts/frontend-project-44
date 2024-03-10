import { checkAnswer } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const startGcd = () => {
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  const mathArr = [
    [null, null],
    [null, null],
    [null, null],
  ];
  let a = 0;
  let b = 0;

  for (let i = 0; i < 3; i += 1) {
    a = Math.round(Math.random() * 100);
    b = Math.round(Math.random() * 100);
    mathArr[i][0] = `${String(a)} ${String(b)}`;
    mathArr[i][1] = String(gcd(a, b));
  }
  return console.log(checkAnswer(mainQuestion, mathArr));
};

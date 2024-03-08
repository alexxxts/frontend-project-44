import { checkAnswer } from '../index.js';

export const startEven = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const mathArr = [
    [null, null],
    [null, null],
    [null, null],
  ];

  for (let i = 0; i < 3; i += 1) {
    mathArr[i][0] = Math.round(Math.random() * 100);
    mathArr[i][1] = (mathArr[i][0] % 2 === 0) ? 'yes' : 'no';
  }
  return console.log(checkAnswer(mainQuestion, mathArr));
};

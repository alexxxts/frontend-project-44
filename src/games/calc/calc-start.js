import { checkAnswer } from '../index.js';

export const startCalc = () => {
  const mainQuestion = 'What is the result of the expression?';
  const mathArr = [
    [null, null],
    [null, null],
    [null, null],
  ];
  let defOperator = 1;
  let a = 0;
  let b = 0;

  for (let i = 0; i < 3; i += 1) {
    defOperator = Math.round(Math.random() * 100);
    a = Math.round(Math.random() * 100);
    b = Math.round(Math.random() * 100);
    if (defOperator < 33) {
      mathArr[i][0] = `${String(a)} + ${String(b)}`;
      mathArr[i][1] = String(a + b);
    } else if (defOperator >= 33 && defOperator <= 66) {
      mathArr[i][0] = `${String(a)} - ${String(b)}`;
      mathArr[i][1] = String(a - b);
    } else {
      mathArr[i][0] = `${String(a)} * ${String(b)}`;
      mathArr[i][1] = String(a * b);
    }
  }
  return console.log(checkAnswer(mainQuestion, mathArr));
};

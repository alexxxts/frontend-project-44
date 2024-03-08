import { checkAnswer } from '../index.js';

export const startEven = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomExp1 = Math.round(Math.random() * 100);
  const correctAnswer1 = (randomExp1 % 2 === 0) ? 'yes' : 'no';
  const randomExp2 = Math.round(Math.random() * 100);
  const correctAnswer2 = (randomExp2 % 2 === 0) ? 'yes' : 'no';
  const randomExp3 = Math.round(Math.random() * 100);
  const correctAnswer3 = (randomExp3 % 2 === 0) ? 'yes' : 'no';
  const evenMathArr = [
    [randomExp1, correctAnswer1],
    [randomExp2, correctAnswer2],
    [randomExp3, correctAnswer3],
  ];

  return checkAnswer(mainQuestion, evenMathArr);
};

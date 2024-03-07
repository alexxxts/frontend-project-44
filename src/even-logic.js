import { checkAnswer } from './index.js';

export const conditionsEven = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomExp = Math.round(Math.random() * 100);
  const correctAnswer = (randomExp % 2 === 0) ? 'yes' : 'no';

  return checkAnswer(mainQuestion, randomExp, correctAnswer);
};

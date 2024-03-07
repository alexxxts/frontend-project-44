import { checkAnswer } from '../index.js';

export const startEven = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  return checkAnswer(mainQuestion);
};

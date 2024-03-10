import checkAnswer from '../index.js';

const makeProgression = (step, start, number, position) => {
  const arrProgression = [];
  let nextTerm = start;
  let strProgression = '';

  for (let i = 0; i < number; i += 1) {
    arrProgression[i] = nextTerm;
    nextTerm += step;
    if (i === (position - 1)) {
      strProgression += '.. ';
    } else if (i === (number - 1)) {
      strProgression += `${arrProgression[i]}`;
    } else {
      strProgression += `${arrProgression[i]} `;
    }
  }
  return strProgression;
};

function randomMinMax(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default function startProgression() {
  const mainQuestion = 'What number is missing in the progression?';
  const mathArr = [
    [null, null],
    [null, null],
    [null, null],
  ];
  let stepProg = 0;
  let startTermProg = 0;
  let numberTermsProg = 0;
  let posHideProg = 0;

  for (let i = 0; i < 3; i += 1) {
    stepProg = randomMinMax(2, 10);
    startTermProg = Math.round(Math.random() * 100);
    numberTermsProg = randomMinMax(5, 15);
    posHideProg = randomMinMax(1, numberTermsProg);
    mathArr[i][0] = makeProgression(stepProg, startTermProg, numberTermsProg, posHideProg);
    mathArr[i][1] = String(startTermProg + stepProg * (posHideProg - 1));
  }
  return console.log(checkAnswer(mainQuestion, mathArr));
}

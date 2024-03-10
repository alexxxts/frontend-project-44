import readlineSync from 'readline-sync';

function whatsName() {
  return readlineSync.question('May I have your name? ');
}

export default whatsName;

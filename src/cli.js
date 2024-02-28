import readlineSync from 'readline-sync';

export const whatIsYourName = () => readlineSync.question('May I have your name? ');

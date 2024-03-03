import readlineSync from 'readline-sync';

export const whatsName = () => readlineSync.question('May I have your name? ');

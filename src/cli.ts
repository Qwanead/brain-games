import readlineSync from 'readline-sync';

const readValue = (question: string) => readlineSync.question(question);

export default readValue;

import readlineSync from 'readline-sync';

const readValue = (question) => readlineSync.question(question);

export default readValue;

import readValue from './cli.js';

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readValue('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const getRndInteger = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export { printGreeting, getRndInteger };

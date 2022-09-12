import readValue from './cli.js';

const printGreeting = (): string => {
  console.log('Welcome to the Brain Games!');
  const name = readValue('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const getRndInteger = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export { printGreeting, getRndInteger };

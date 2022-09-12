interface Game<T> {
  rule: string;
  getInput: () => T;
  getQuestion: (arg: T) => string;
  getCorrectAnswer: (arg: T) => number | ('yes' | 'no');
}

class BrainGame<T> implements Game<T> {
  rule;

  constructor({ rule, getInput, getQuestion, getCorrectAnswer }: Game<T>) {
    this.rule = rule;
    this.getInput = getInput;
    this.getQuestion = getQuestion;
    this.getCorrectAnswer = getCorrectAnswer;
  }

  getInput;

  getQuestion;

  getCorrectAnswer;
}

export { Game };
export default BrainGame;

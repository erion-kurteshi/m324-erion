import { generate } from 'random-words';
import chalk from 'chalk';

const word1 = generate({ exactly: 1, minLength: 20, wordsPerString: 1 })[0];
const word2 = generate();

console.log(`The ${chalk.greenBright(word1)} is ${chalk.redBright(word2)}.`);

export const sum = (a, b) => a + b;

function add(a, b) {
  return a + b;
}

module.exports = add;
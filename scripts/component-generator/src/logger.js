/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = {
  error: msg => console.log(`${chalk.red('✖')} ${msg}`),
  success: msg => console.log(`${chalk.green('✔')} ${msg}`),
  info: msg => console.log(`${chalk.blue('i')} ${msg}`),
  divider: () => console.log(),
};

const chalk = require('chalk');

const logger = require('./logger');
const verifyWorkingDirectory = require('./verify-working-directory');
const runPrompts = require('./run-prompts');
const copyTemplates = require('./copy-templates');

module.exports = async (cwd, options) => {
  await verifyWorkingDirectory(cwd, {
    skipGitChecks: options.force,
  });

  const answers = await runPrompts();

  logger.divider();
  logger.info(
    `Generating a new ${chalk.cyan(
      `<${answers.componentName}/>`,
    )} component for you...`,
  );

  logger.divider();

  await copyTemplates(answers);

  logger.divider();

  logger.success(
    `The ${chalk.cyan(
      `<${answers.componentName}/>`,
    )} component has been genearted!`,
  );
};

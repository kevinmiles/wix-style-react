#!/usr/bin/env node

/* eslint-disable no-console */
const chalk = require('chalk');
const { generateComponent, utils, logger } = require('../src');

const cwd = process.cwd();

const run = async () => {
  if (!utils.isProjectRoot(cwd)) {
    logger.divider();
    logger.error(
      'Please run the generator in the root directory of the project',
    );
    process.exit(1);
  }

  await generateComponent(cwd, {
    force: true,
    skipCodemods: true,
    answers: {
      ComponentName: 'GeneratedTestComponent',
      description: 'This is an automatically generated test component',
      testComponent: true,
    },
  });

  if (!(await utils.isGitRepoClean(cwd))) {
    logger.divider();
    logger.info(
      `Component generation has completed but the git repository is dirty This may
  indicate that the ${chalk.cyan(
    '<GeneratedTestComponent/>',
  )} is not updated in the current
  branch. You may want to regenerate the component and push the changes to master.`,
    );

    console.log(
      `##teamcity[buildStatus text='Test component may be outdated.']`,
    );
  }
};

run();

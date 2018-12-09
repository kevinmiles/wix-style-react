#!/usr/bin/env node

const { generateComponent, utils, logger } = require('../src');

const cwd = process.cwd();

if (!utils.isProjectRoot(cwd)) {
  logger.divider();
  logger.error('Please run the generator in the root directory of the project');
  process.exit(1);
}

generateComponent(cwd, {
  force: true,
  skipCodemods: true,
  answers: {
    ComponentName: 'GeneratedTestComponent',
    description: 'This is an automatically generated test component',
    testComponent: true,
  },
});

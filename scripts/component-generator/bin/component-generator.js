#!/usr/bin/env node

const program = require('commander');
const { generateComponent, utils, logger } = require('../src');

program
  .version('0.1.0')
  .description(`A component generator tailored for wix-style-react's needs`)
  .option('-f, --force', 'Skip some pre-run checks')
  .parse(process.argv);

logger.divider();

const cwd = process.cwd();

if (!utils.isProjectRoot(cwd)) {
  logger.error('Please run the generator in the root directory of the project');
  process.exit(1);
}

// Let's get this party started
generateComponent(cwd, {
  force: program.force,
});

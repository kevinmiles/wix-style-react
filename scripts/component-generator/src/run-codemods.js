const path = require('path');
const { exec } = require('child_process');
const utils = require('./utils');
const logger = require('./logger');

const runTransform = (transformName, file, { ComponentName }) => {
  return new Promise((resolve, reject) => {
    const transformPath = path.join(__dirname, 'transforms', transformName);
    const pathToExecutable = path.join(
      __dirname,
      '../../../node_modules/.bin/jscodeshift',
    );

    const execProc = exec(
      `${pathToExecutable} -t ${transformPath} ${file} --ComponentName=${ComponentName}`,
    );

    execProc.stderr.on('data', data => {
      logger.error(
        `Error while running codemod ${transformName}: ${data.toString()}`,
      );
      reject(data.toString());
    });

    execProc.on('exit', resolve);
  });
};

module.exports = async ({ ComponentName }) => {
  logger.info('Running codemods');

  // Run the stories-file transform
  await runTransform(
    'stories-file.js',
    utils.getDestinationPath('stories/index.js'),
    { ComponentName },
  );

  // Add to index file
  await runTransform(
    'index-file.js',
    utils.getDestinationPath('src/index.js'),
    { ComponentName },
  );

  // Add testkit exports
  await runTransform(
    'testkit-exports.js',
    [
      utils.getDestinationPath('testkit/index.js'),
      utils.getDestinationPath('testkit/enzyme.js'),
      utils.getDestinationPath('testkit/protractor.js'),
      utils.getDestinationPath('testkit/puppeteer.js'),
    ].join(' '),
    { ComponentName },
  );

  logger.success('Codemods succeeded');
};

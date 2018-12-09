/* eslint-disable no-console */

const path = require('path');
const { exec } = require('child_process');
const utils = require('./utils');

const runTransform = (transformName, file, { ComponentName }) => {
  return new Promise((resolve, reject) => {
    const transformPath = path.join(__dirname, 'transforms', transformName);
    const execProc = exec(
      `jscodeshift -t ${transformPath} ${file} --ComponentName=${ComponentName}`,
    );

    execProc.stdout.on('data', data => console.log(data.toString()));
    execProc.stderr.on('data', data => console.log(data.toString()));
    execProc.on(
      'exit',
      code => console.log('Done with code:', code.toString()) || resolve(),
    );
  });
};

module.exports = async ({ ComponentName }) => {
  // Run the stories-file transform
  await runTransform(
    'stories-file',
    utils.getDestinationPath('.storybook/stories.js'),
    { ComponentName },
  );
};

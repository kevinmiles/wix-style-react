const fs = require('fs-extra');
const logger = require('./logger');
const utils = require('./utils');
const replaceTemplates = require('./replace-templates');

const createFileMap = ({ componentName, description }) => {
  const filesToCopy = [
    'src/Component/Component.driver.js',
    'src/Component/Component.driver.private.js',
    'src/Component/Component.e2e.js',
    'src/Component/Component.js',
    'src/Component/Component.scss',
    'src/Component/Component.spec.js',
    'src/Component/index.js',

    'stories/Component/index.story.js',
    'stories/Component/storySettings.js',

    ...(description ? ['src/Component/README.md'] : []),
  ];

  return filesToCopy.reduce((res, curr) => {
    res[curr] = curr.replace(/Component/g, componentName);

    return res;
  }, {});
};

const copyTemplate = (src, dest, answers) => {
  const templatePath = utils.getTemplatePath(src);
  const destinationPath = utils.getDestinationPath(dest);

  const transformedFileContents = replaceTemplates(
    fs.readFileSync(templatePath, 'utf-8'),
    answers,
  );

  fs.outputFileSync(destinationPath, transformedFileContents);
};

module.exports = async answers => {
  const fileMap = createFileMap(answers);

  for (const [src, dest] of Object.entries(fileMap)) {
    try {
      await copyTemplate(src, dest, answers);
      logger.success(`Creating ${dest}`);
    } catch (e) {
      logger.error(`Creating ${dest}`);
      throw e;
    }
  }
};

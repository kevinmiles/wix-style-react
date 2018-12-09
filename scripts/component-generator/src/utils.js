const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const getProjectRoot = () => path.join(__dirname, '../../../');

const isProjectRoot = dir =>
  path.resolve(dir) === path.resolve(getProjectRoot());

const isGitRepoClean = cwd =>
  new Promise(resolve => {
    simpleGit(cwd).status((err, status) => {
      resolve(status.isClean());
    });
  });

const isPascalCase = value => /^([A-Z][a-z]*)+$/.test(value);

const pascalCaseToCamelCase = str =>
  str.replace(/^./, match => match.toLowerCase());

const pascalCaseToSnakeCase = str =>
  pascalCaseToCamelCase(str).replace(
    /[A-Z]/g,
    match => `-${match.toLowerCase()}`,
  );

const isComponentExists = componentName =>
  fs.existsSync(path.join(getProjectRoot(), 'src', componentName));

const getTemplatePath = (p, template) =>
  path.join(__dirname, '../templates', template, p);
const getDestinationPath = p => path.join(getProjectRoot(), p);

module.exports = {
  getProjectRoot,
  isProjectRoot,
  isGitRepoClean,
  isPascalCase,
  pascalCaseToCamelCase,
  pascalCaseToSnakeCase,
  isComponentExists,
  getTemplatePath,
  getDestinationPath,
};

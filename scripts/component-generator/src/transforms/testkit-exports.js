const getTestkitFactoryCreatorMethod = importPath => {
  if (importPath.match('vanilla')) {
    return 'uniTestkitFactoryCreator';
  }

  if (importPath.match('enzyme')) {
    return 'enzymeUniTestkitFactoryCreator';
  }

  if (importPath.match('protractor')) {
    return 'protractorUniTestkitFactoryCreator';
  }

  if (importPath.match('puppeteer')) {
    return 'puppeteerUniTestkitFactoryCreator';
  }

  return false;
};

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName, componentName } = options;

  // Find the `testkitFactoryCreator` method to use
  const importNode = root
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal',
        value: value => value.match('wix-ui-test-utils/'),
      },
    })
    .get(0).node;

  const testkitFactoryMethodName = getTestkitFactoryCreatorMethod(
    importNode.source.value,
  );

  // Add the DriverFactory import
  root
    .get()
    .node.program.body.push(
      j.importDeclaration(
        [j.importSpecifier(j.identifier(`${componentName}DriverFactory`))],
        j.literal(`../src/${ComponentName}/${ComponentName}.driver`),
      ),
    );

  // Export the TestkitFactory after calling the factory creator
  root
    .get()
    .node.program.body.push(
      j.exportNamedDeclaration(
        j.variableDeclaration('const', [
          j.variableDeclarator(
            j.identifier(`${componentName}TestkitFactory`),
            j.callExpression(j.identifier(testkitFactoryMethodName), [
              j.identifier(`${componentName}DriverFactory`),
            ]),
          ),
        ]),
        [],
        null,
      ),
    );

  return root.toSource();
};

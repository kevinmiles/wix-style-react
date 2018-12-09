module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  // Find the ImportDeclaration with out leading indication comment
  const path = root
    .find(j.ImportDeclaration, {
      leadingComments: comments =>
        comments.some(({ value }) =>
          value.includes(`Generated components using the component generator`),
        ),
    })
    .paths()[0];

  // Add the import statement
  j(path).insertAfter(`import '../stories/${ComponentName}/index.story';`);

  return root.toSource();
};

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(
  __dirname,
  'src/transforms/stories-file',
  { ComponentName: 'MyNewComponent' },
  'stories',
);

defineTest(
  __dirname,
  'src/transforms/index-file',
  { ComponentName: 'MyNewComponent' },
  'index',
);

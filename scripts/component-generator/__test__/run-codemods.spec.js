jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

// This will run the transform on the `../__testfixtures__/stories.input.js` file
defineTest(__dirname, 'src/transform/stories-file', { ComponentName: 'MyNewComponent' }, 'stories');

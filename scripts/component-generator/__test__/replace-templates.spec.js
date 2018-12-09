const replaceTemplates = require('../src/replace-templates');

test('replaceTemplates', () => {
  expect(
    replaceTemplates('This is a {%template%}', { template: 'Hey!' }),
  ).toEqual('This is a Hey!');

  expect(
    replaceTemplates(
      `Also for multi line {%stuff%}.
Test test {%test%} {%anotherTest%}`,
      {
        stuff: 'strings',
        test: 'hello',
        anotherTest: 'another hello',
      },
    ),
  ).toEqual(
    `Also for multi line strings.
Test test hello another hello`,
  );
});

import React from 'react';
import { storySettings } from './storySettings';
import { placements } from '../Popover/storySettings';

import LiveCodeExample from '../utils/Components/LiveCodeExample';
import { Layout, Cell } from '../../src/Layout';

import DropdownPopover from '../../src/DropdownPopover';
import Button from '../../src/Button';

import ExampleUncontrolledMouse from '!raw-loader!./examples/ExampleUncontrolledMouse';
import ExampleUncontrolledClick from '!raw-loader!./examples/ExampleUncontrolledClick';
import ExampleUncontrolledIcon from '!raw-loader!./examples/ExampleUncontrolledIcon';
import ExampleControlledInput from '!raw-loader!./examples/ExampleControlledInput';

const options = [
  {
    label: '4 options',
    value: [
      { id: 0, value: 'First option' },
      { id: 1, value: 'Second option' },
      { id: 2, value: 'Third option' },
      { id: 3, value: 'Fourth option' },
    ],
  },
  {
    label: '10 options',
    value: Array(10)
      .fill()
      .map((v, i) => ({ id: i, value: `Option ${i}` })),
  },
];

const children = [
  {
    label: 'Regular React node',
    value: <Button>I am a plain Button!</Button>,
  },
  {
    label: 'Render prop on click',
    value: ({ toggle, selectedOption = {} }) => (
      <Button onClick={toggle}>{selectedOption.value || 'Click me'}</Button>
    ),
  },
  {
    label: 'Render prop on hover',
    value: ({ open, close, selectedOption = {} }) => (
      <Button onMouseEnter={open} onMouseLeave={close}>
        {selectedOption.value || 'Hover me'}
      </Button>
    ),
  },
];

const openProps = [
  { label: 'false', value: false },
  { label: 'true', value: true },
];

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: DropdownPopover,
  componentPath: '../../src/DropdownPopover/DropdownPopover.js',

  componentProps: {
    dataHook: storySettings.dataHook,

    children: children[1].value,
    options: options[0].value,
    open: undefined,
    showArrow: false,
    placement: 'bottom',
  },

  exampleProps: {
    children,
    options,
    open: openProps,
    placement: placements,

    onSelect: selectedOption =>
      `Triggered with: ${JSON.stringify(selectedOption)}`,
    onClickOutside: () => 'Triggered!',
  },

  examples: (
    <div
      style={{
        maxWidth: 1254,
        padding: 10,
      }}
    >
      <Layout>
        <Cell span={6}>
          <LiveCodeExample
            compact
            autoRender={false}
            title="Uncontrolled example with mouse events"
            initialCode={ExampleUncontrolledMouse}
          />
        </Cell>

        <Cell span={6}>
          <LiveCodeExample
            compact
            autoRender={false}
            title="Uncontrolled example with click events"
            initialCode={ExampleUncontrolledClick}
          />
        </Cell>

        <Cell span={6}>
          <LiveCodeExample
            compact
            autoRender={false}
            title="Uncontrolled example with an icon"
            initialCode={ExampleUncontrolledIcon}
          />
        </Cell>

        <Cell span={6}>
          <LiveCodeExample
            compact
            autoRender={false}
            title="Controlled example with an input"
            initialCode={ExampleControlledInput}
          />
        </Cell>
      </Layout>
    </div>
  ),
};

import React from 'react';

import Markdown from 'wix-storybook-utils/Markdown';

import Text from 'wix-style-react/Text';
import { Layout, Cell } from 'wix-style-react/Layout';

import LiveCodeExample, {
  createPropsArray,
} from '../../utils/Components/LiveCodeExample';

const createPopperWithStateExample = props => `
class PopoverWithState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true
    };
  }

  toggle() {
    this.setState(({ shown }) => ({ shown: !shown }));
  }

  render() {
    const { shown } = this.state;

    return (
      <Popover
        showArrow
        placement="right"
        dataHook="story-popover-append-to"
        shown={shown}
        ${createPropsArray(props).join('        \n')}
      >
        <Popover.Element>
          <Button onClick={() => this.toggle()}>Click me to toggle</Button>
        </Popover.Element>
        <Popover.Content>
          <div style={{ padding: '12px 24px', textAlign: 'center' }}>
            <Text>I am the content!</Text>
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}
`;

const createScrolParentExample = () => `
const ScrollableContent = ({ children }) => (
  <div
    style={{
      overflow: 'auto',
      height: 120,
      border: '1px solid black',
    }}
  >
    <div style={{ padding: '25px 25px 150px' }}>
      {children}
    </div>
  </div>
);

${createPopperWithStateExample({ appendTo: 'scrollParent' })}

render(
  <ScrollableContent>
    <PopoverWithState />
  </ScrollableContent>
);
`;

const Section = ({ appendToProp, description, children }) => (
  <Layout>
    <Cell span={6}>
      <Markdown source={`#### \`appendTo="${appendToProp}"\``} />
      <Markdown source={description} />
    </Cell>

    <Cell span={6}>{children}</Cell>
  </Layout>
);

export default () => (
  <div style={{ maxWidth: 1254 }}>
    <Section
      appendToProp="window"
      description="If you inspect the content, you'll see it is attached to a new div under the body."
    >
      <LiveCodeExample
        compact
        initialCode={createPopperWithStateExample({ appendTo: 'window' })}
      />
    </Section>

    <Section
      appendToProp="parent"
      description="If you inspect the content, you'll see it is attached to a new div next to the target element (the Button)."
    >
      <LiveCodeExample
        compact
        initialCode={createPopperWithStateExample({ appendTo: 'parent' })}
      />
    </Section>

    <Section
      appendToProp="scrollParent"
      description="If you inspect the content, you'll see it is attached to a new div under the list container."
    >
      <LiveCodeExample
        compact
        autoRender={false}
        initialCode={createScrolParentExample()}
      />
    </Section>
  </div>
);

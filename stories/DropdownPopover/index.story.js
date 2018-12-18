import React from 'react';
import { storySettings } from './storySettings';

import DropdownPopover from '../../src/DropdownPopover';
import Button from '../../src/Button';
import Input from '../../src/Input';

class ButtonWithOptionsSemiControlled extends React.Component {
  _handleOnSelect = selectedOption => {
    // eslint-disable-next-line no-console
    console.log('Select option:', selectedOption);
  };

  render() {
    return (
      <DropdownPopover
        options={[
          { id: 1, value: 'First option' },
          { id: 2, value: 'Second option' },
          { id: 3, value: 'Third option' },
          { id: 4, value: 'Fourth option' },
        ]}
        showArrow
        onSelect={this._handleOnSelect}
        initialSelectedId={2}
      >
        {({ open, close, selectedOption = {} }) => {
          return (
            <Button onMouseEnter={open} onMouseLeave={close}>
              {selectedOption.value || 'Click me'}
            </Button>
          );
        }}
      </DropdownPopover>
    );
  }
}

class ButtonWithOptionsControlled extends React.Component {
  state = {
    open: false,
    selectedId: -1,
    value: '',
  };

  _open = () => {
    this.setState({ open: true });
  };

  _close = () => {
    this.setState({ open: false });
  };

  _toggle = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  _onSelect = selectedOption => {
    // eslint-disable-next-line no-console
    console.log('Select option:', selectedOption);

    this.setState({
      selectedId: selectedOption.id,
      open: false,
      value: selectedOption.value,
    });
  };

  _onChange = e => {
    const { value } = e.target;

    this.setState({ value: e.target.value });

    if (value.trim()) {
      this._open();
    }
  };

  _onKeyDown = (e, delegateKeyDown) => {
    this._open();
    delegateKeyDown(e);
  };

  render() {
    const { open, selectedId, value } = this.state;

    return (
      <DropdownPopover
        open={open}
        onClickOutside={this._close}
        options={[
          { id: 1, value: 'First option' },
          { id: 2, value: 'Second option' },
          { id: 3, value: 'Third option' },
          { id: 4, value: 'Fourth option' },
        ]}
        selectedId={selectedId}
        onSelect={this._onSelect}
      >
        {({ delegateKeyDown }) => {
          return (
            <Input
              menuArrow
              value={value}
              onChange={this._onChange}
              onInputClicked={this._open}
              onKeyDown={e => this._onKeyDown(e, delegateKeyDown)}
            />
          );
        }}
      </DropdownPopover>
    );
  }
}

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: DropdownPopover,
  componentPath: '../../src/DropdownPopover/DropdownPopover.js',

  componentProps: {
    dataHook: storySettings.dataHook,

    children: <div>test</div>,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  examples: (
    <div style={{ maxWidth: 627, textAlign: 'center', background: '#eee' }}>
      <ButtonWithOptionsSemiControlled />

      <br />
      <br />
      <br />

      <ButtonWithOptionsControlled />
    </div>
  ),
};

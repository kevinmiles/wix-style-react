import React, {Component} from 'react';
import Button from 'wix-style-react/Button';
import Modal from 'wix-style-react/Modal';

import {ComposerLayout} from '../../../src/ComposerLayout';
import {GenericLayout} from '../../../src/GenericLayout';


class GenericModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpenGenericModal: false
    };
  }

  renderComposerLayout() {
    /* eslint-disable */
    const onCloseButtonClick = () => console.log('close button clicked');
    const onInfoButtonClick = () => console.log('question mark button clicked');
    const onConfirmButtonClick = () => console.log('confirm button clicked');
    const onCancelButtonClick = () => console.log('cancel button clicked');
    /* eslint-enable */

    const confirmButtonContent = 'Save test';
    const cancelButtonContent = 'Cancel test';

    return (<ComposerLayout
      content={<div >Hello</div>}
      title="title"
      headerSideActions={<div>Some header Side Actions</div>}
      footerSideActions={<div>Some footer Side Actions</div>}
      onCloseButtonClick={onCloseButtonClick}
      onInfoButtonClick={onInfoButtonClick}
      onConfirmButtonClick={onConfirmButtonClick}
      onCancelButtonClick={onCancelButtonClick}
      confirmButtonContent={confirmButtonContent}
      cancelButtonContent={cancelButtonContent}
      fullscreen
      />);
  }

  renderGenericLayout() {
    const x = new Array(100).fill(<div>hello</div>);
    return (<GenericLayout
      header="header"
      content={x}
      footer="footer"
      />);
  }

  render() {
    const setState = state => () => this.setState(state);
    const closeGenericModal = setState({isOpenGenericModal: false});
    const openGenericModal = setState({isOpenGenericModal: true});

    return (
      <div>
        <Button
          dataHook="open-fullscreen-generic-modal-button"
          onClick={openGenericModal}
          >Open Generic Modal</Button>

        <Modal
          contentLabel="Generic modal example"
          isOpen={this.state.isOpenGenericModal}
          onRequestClose={closeGenericModal}
          >
          {this.renderComposerLayout()}
        </Modal>
      </div>
    );
  }
}

export default () => <GenericModal/>;
/* eslint-disable react/prop-types */
import React from 'react';
import {MessageBoxFunctionalLayout} from 'wix-style-react/MessageBox';
import EmptyState from 'wix-style-react/EmptyState';

import ImagePlaceholder from '../../assets/ImagePlaceholder';

export default () => (
  <MessageBoxFunctionalLayout
    title="Choose Your Favorites"
    confirmText="Select"
    cancelText="Cancel"
    theme="blue"
    disableConfirmation
    withEmptyState
    dataHook="alert-empty-state"
    >
    <EmptyState
      theme="section"
      title="You don't have any favorites yet"
      subtitle="Go back and add some items to your favorites' list"
      image={<ImagePlaceholder/>}
      />
  </MessageBoxFunctionalLayout>
);

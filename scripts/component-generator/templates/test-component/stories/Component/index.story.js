import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import {%ComponentName%} from '../../src/{%ComponentName%}';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: {%ComponentName%},
  componentPath: '../../src/{%ComponentName%}/{%ComponentName%}.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    buttonText: undefined,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },
};


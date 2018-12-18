import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

// TODO: remove when unidriver will support our needed events triggering
import { Simulate } from 'react-dom/test-utils';

import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const dropdownPopoverDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getTargetElement = () => byDataHook('popover-element');
  const getContentElement = () => byDataHook('popover-content');

  const createDropdownLayoutDriver = () => dropdownLayoutDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    getTargetElement: () => getTargetElement().getNative(),
    getDropdownElement: () => getContentElement().getNative(),

    isDropdownShown: async () => await getContentElement().exists(),

    // TODO: remove when unidriver will support it natively
    keyDown: async key =>
      Simulate.keyDown(await getTargetElement().getNative(), { key }),
    clickOutside: async () => document.dispatchEvent(new Event('mousedown')),

    mouseEnterTarget: async () => {
      Simulate.mouseEnter((await getTargetElement().getNative()).childNodes[0]);
    },

    mouseLeaveTarget: async () => {
      Simulate.mouseLeave((await getTargetElement().getNative()).childNodes[0]);
    },

    mouseLeaveDropdown: async () => {
      Simulate.mouseLeave((await base.getNative()).childNodes[0]);
    },

    // DropdownLayout inherited methods
    selectOption: async index =>
      createDropdownLayoutDriver().clickAtOption(index),
    isOptionHovered: async index =>
      createDropdownLayoutDriver().isOptionHovered(index),
    isOptionSelected: async index =>
      createDropdownLayoutDriver().isOptionSelected(index),
  };
};

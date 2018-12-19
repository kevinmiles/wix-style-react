import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

// TODO: remove when unidriver will support our needed events triggering
import { Simulate } from 'react-dom/test-utils';

export const dropdownPopoverDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getTargetElement = () => byDataHook('popover-element');
  const getContentElement = () => byDataHook('popover-content');

  const createDropdownLayoutDriver = () => dropdownLayoutDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /** Returns the native target element */
    getTargetElement: () => getTargetElement().getNative(),

    /** Returns `true` if the dropdown is being shown */
    isDropdownShown: async () => await getContentElement().exists(),

    /** Select a specific option */
    selectOption: async index =>
      createDropdownLayoutDriver().clickAtOption(index),

    /* ------------------------------------------------------------------------- */
    /* The following are temporary until UniDriver supports mouse and key events */
    /* ------------------------------------------------------------------------- */

    /** Click outside of the component */
    clickOutside: async () => document.dispatchEvent(new Event('mousedown')),

    /** Perform a mouseEnter on the component */
    mouseEnter: async () => {
      Simulate.mouseEnter((await base.getNative()).childNodes[0]);
    },

    /** Perform a mouseLeave on the component */
    mouseLeave: async () => {
      Simulate.mouseLeave((await base.getNative()).childNodes[0]);
    },
  };
};

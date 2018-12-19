import { dropdownPopoverDriverFactory as publicDriverFactory } from './DropdownPopover.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

// TODO: remove when unidriver will support our needed events triggering
import { Simulate } from 'react-dom/test-utils';

export const dropdownPopoverPrivateDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getTargetElement = () => byDataHook('popover-element');
  const getContentElement = () => byDataHook('popover-content');

  const createDropdownLayoutDriver = () => dropdownLayoutDriverFactory(base);

  return {
    ...publicDriverFactory(base),

    /** Returns the native DropdownLayout element */
    getDropdownElement: () => getContentElement().getNative(),

    /** Return `true` if the option is hovered by the mouse */
    isOptionHovered: async index =>
      createDropdownLayoutDriver().isOptionHovered(index),

    /** Return `true` if the option is selected */
    isOptionSelected: async index =>
      createDropdownLayoutDriver().isOptionSelected(index),

    /* ------------------------------------------------------------------------- */
    /* The following are temporary until UniDriver supports mouse and key events */
    /* ------------------------------------------------------------------------- */

    keyDown: async key =>
      Simulate.keyDown(await getTargetElement().getNative(), { key }),

    /** Perform a mouseEnter on the target element */
    mouseEnterTarget: async () => {
      Simulate.mouseEnter((await getTargetElement().getNative()).childNodes[0]);
    },

    /** Perform a mouseEnter on the target element */
    mouseLeaveTarget: async () => {
      Simulate.mouseLeave((await getTargetElement().getNative()).childNodes[0]);
    },
  };
};

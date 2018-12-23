import { dropdownPopoverDriverFactory as publicDriverFactory } from './DropdownPopover.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

// TODO: remove when implementation with UniDriver becomes possible
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

    // TODO: update when implementation with UniDriver becomes possible

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

    // TODO: move these to the public driver when implementation with UniDriver becomes possible

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

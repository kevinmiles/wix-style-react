import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const dropdownPopoverDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getTargetElement = () => byDataHook('popover-element');
  const getContentElement = () => byDataHook('popover-content');

  const createDropdownLayoutDriver = () => dropdownLayoutDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /** Returns the native target element */
    getTargetElement: () => getTargetElement().getNative(),

    /** Returns the native target element */
    clickTargetElement: () => getTargetElement().click(),

    /** Returns `true` if the dropdown is being shown */
    isDropdownShown: async () => await getContentElement().exists(),

    /** Select a specific option */
    selectOption: async index =>
      createDropdownLayoutDriver().clickAtOption(index),
  };
};

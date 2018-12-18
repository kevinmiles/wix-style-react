import { dropdownPopoverDriverFactory as publicDriverFactory } from './DropdownPopover.driver';

export const dropdownPopoverPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};

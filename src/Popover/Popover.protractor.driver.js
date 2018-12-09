import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/Popover/Popover.protractor.driver';

const popoverDriverFactory = component => {
  return {
    ...corePopoverDriverFactory(component),
  };
};

export default popoverDriverFactory;

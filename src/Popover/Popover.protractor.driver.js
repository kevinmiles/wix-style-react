import { popoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/Popover.protractor.driver';

export default component => {
  return {
    ...popoverDriverFactory(component),
  };
};

import { popoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/popover.driver';

export default ({ element, eventTrigger }) => {
  return {
    ...popoverDriverFactory({ element, eventTrigger }),
  };
};

import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

// TODO: remove when unidriver will support our needed events triggering
import { Simulate } from 'react-dom/test-utils';

export const dropdownLayoutDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getOptions = () => byDataHook('dropdown-layout-options').$$('div');
  const getOptionAt = index => getOptions().get(index);

  return {
    ...baseUniDriverFactory(base),

    optionsLength: () => getOptions().count(),

    clickAtOption: async index => {
      const option = await getOptionAt(index).getNative();
      Simulate.mouseDown(option);
    },

    isOptionHovered: async index => {
      const option = await getOptionAt(index);
      return await option.hasClass('hovered');
    },

    isOptionSelected: async index => {
      const option = await getOptionAt(index);
      return await option.hasClass('selected');
    },
  };
};

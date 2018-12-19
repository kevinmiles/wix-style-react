import { mouseEnter } from 'wix-ui-test-utils/protractor';

const getTitle = base => base.$('[data-hook="title"]');

const getPrimaryAction = base => base.$('[data-hook="primary-action"]');

const getSecondaryAction = base => base.$('[data-hook="secondary-action"]');

const hover = async base => mouseEnter(await base.getNative());

const cardGalleryItemDriverFactory = base => {
  return {
    element: async () => base.getNative(),
    getTitle: async () => getTitle(base).text(),
    getSubtitle: async () => base.$('[data-hook="subtitle"]').text(),
    getBackgroundImageUrl: async () => {
      const element = await base
        .$('[data-hook="background-image"]')
        .getNative();
      const backgroundImageStyle = await element.getCssValue(
        'background-image',
      );

      return backgroundImageStyle.match(/url\("(.*)"\)/)[1];
    },
    getPrimaryActionLabel: async () => {
      await hover(base);
      return getPrimaryAction(base).text();
    },
    getSecondaryActionLabel: async () => {
      await hover(base);
      return getSecondaryAction(base).text();
    },
  };
};

export default cardGalleryItemDriverFactory;

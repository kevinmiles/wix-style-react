import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

const getTitle = base => base.$('[data-hook="title"]');
const getPrimaryAction = base => base.$('[data-hook="primary-action"]');
const getSecondaryAction = base => base.$('[data-hook="secondary-action"]');

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  getTitle: async () => getTitle(base).text(),
  getSubtitle: async () => base.$('[data-hook="subtitle"]').text(),
  getBackgroundImageUrl: async () => {
    const style = await base.$('[data-hook="background-image"]').attr('style');

    return style.match(/url\("?([^"]*)"?\)/)[1];
  },
  click: async () => base.$('[data-hook="hover-component"]').click(),
  getPrimaryActionLabel: async () => {
    return getPrimaryAction(base).text();
  },
  clickOnPrimaryAction: async () => {
    return getPrimaryAction(base).click();
  },
  getSecondaryActionLabel: async () => {
    return getSecondaryAction(base).text();
  },
  clickOnSecondaryAction: async () => {
    return getSecondaryAction(base).click();
  },
});

export default cardGalleryItemDriverFactory;

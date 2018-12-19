import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import ReactTestUtils from 'react-dom/test-utils';

const getTitle = base => base.$('[data-hook="title"]');
const getPrimaryAction = base => base.$('[data-hook="primary-action"]');
const getSecondaryAction = base => base.$('[data-hook="secondary-action"]');
const hover = async base =>
  ReactTestUtils.SimulateNative.mouseOver(
    await base.$('[data-hook="hover-component"]').getNative(),
  );

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  getTitle: async () => getTitle(base).text(),
  getSubtitle: async () => base.$('[data-hook="subtitle"]').text(),
  getBackgroundImageUrl: async () => {
    const element = await base.$('[data-hook="background-image"]').getNative();

    return element.style['background-image'].match(/url\((.*)\)/)[1];
  },
  getPrimaryActionLabel: async () => {
    await hover(base);
    return getPrimaryAction(base).text();
  },
  clickOnPrimaryAction: async () => {
    await hover(base);
    return getPrimaryAction(base).click();
  },
  getSecondaryActionLabel: async () => {
    await hover(base);
    return getSecondaryAction(base).text();
  },
  clickOnSecondaryAction: async () => {
    await hover(base);
    return getSecondaryAction(base).click();
  },
});

export default cardGalleryItemDriverFactory;

import cardGalleryItemDriverFactory from './CardGalleryItem.driver';
import ReactTestUtils from 'react-dom/test-utils';

const cardGalleryItemPrivateDriverFactory = base => ({
  ...cardGalleryItemDriverFactory(base),
  hover: async () =>
    ReactTestUtils.SimulateNative.mouseOver(
      await base.$('[data-hook="hover-component"]').getNative(),
    ),
  isHoveredContentPresent: async () =>
    await base.$('[data-hook="hovered-content"]').exists(),
});

export default cardGalleryItemPrivateDriverFactory;

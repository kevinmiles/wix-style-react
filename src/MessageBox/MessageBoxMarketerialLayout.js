import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import Heading from '../Heading';
import Text from '../Text';
import classNames from 'classnames';
import CloseButton from '../CloseButton';
import deprecationLog from '../utils/deprecationLog';

import Button from '../Backoffice/Button';

import * as styles from './MessageBoxMarketerialLayout.scss';

//TODO: Move this to propTypes validation, only when `imgUrl` prop is used.
deprecationLog(
  'MessageBoxMarketerialLayout have issue with image positioning. Please use fixImagePosition prop to fix it. Next major version will have a fix by default.',
);
class MessageBoxMarketerialLayout extends WixComponent {
  render() {
    const {
      title,
      content,
      primaryButtonLabel,
      primaryButtonDisabled,
      secondaryButtonLabel,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      imageUrl,
      illustration,
      onClose,
      theme,
      primaryButtonTheme,
      imageComponent,
      footerBottomChildren,
      fixImagePosition,
    } = this.props;

    return (
      <div
        className={classNames(styles.root, {
          [styles.hasIllustration]: illustration,
          [styles[`header-${theme}`]]: true,
        })}
      >
        <div className={styles.header}>
          <div className={styles.close}>
            <CloseButton
              dataHook="close-button"
              size="medium"
              onClick={onClose}
              skin="lightFilled"
            />
          </div>
          {!illustration &&
            (imageComponent ? (
              <div className={styles.headerImageComponent}>
                {imageComponent}
              </div>
            ) : (
              imageUrl && (
                <div
                  className={classNames(styles.headerImage, {
                    [styles.headerImageFix]: fixImagePosition,
                  })}
                >
                  <img src={imageUrl} data-hook="header-image" />
                </div>
              )
            ))}
        </div>
        {illustration && (
          <div className={styles.illustration}>{illustration}</div>
        )}
        <div className={styles.title} data-hook="message-box-title">
          <Heading appearance="H1">{title}</Heading>
        </div>
        <div className={styles.content}>
          <Text size="medium" weight="thin">
            {content}
          </Text>
        </div>
        <div className={styles.buttonsContainer}>
          {primaryButtonLabel ? (
            <div className={styles.primaryButtonContainer}>
              <Button
                theme={`full${primaryButtonTheme || theme}`}
                onClick={onPrimaryButtonClick}
                dataHook="primary-button"
                disabled={primaryButtonDisabled}
              >
                {primaryButtonLabel}
              </Button>
            </div>
          ) : null}
          {secondaryButtonLabel && !footerBottomChildren ? (
            <div className={styles.secondaryButtonContainer}>
              <span
                onClick={onSecondaryButtonClick}
                data-hook="secondary-button"
              >
                {secondaryButtonLabel}
              </span>
            </div>
          ) : null}
        </div>
        {footerBottomChildren ? (
          <div
            data-hook="footer-layout-bottom-children"
            className={styles.bottomChildren}
            children={footerBottomChildren}
          />
        ) : null}
      </div>
    );
  }
}

MessageBoxMarketerialLayout.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  primaryButtonLabel: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  secondaryButtonLabel: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  imageUrl: PropTypes.string,
  illustration: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  imageComponent: PropTypes.node,
  footerBottomChildren: PropTypes.node,
  theme: PropTypes.oneOf(['blue', 'purple']),
  primaryButtonTheme: PropTypes.oneOf(['blue', 'purple']),
  fixImagePosition: PropTypes.bool,
};

MessageBoxMarketerialLayout.defaultProps = {
  theme: 'blue',
};

export default MessageBoxMarketerialLayout;

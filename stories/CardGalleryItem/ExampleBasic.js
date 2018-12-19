import React from 'react';

import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import { Container, Row, Col } from 'wix-style-react/Grid';
import Heading from 'wix-style-react/Heading';
import styles from './ExampleBasic.scss';

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

const generateCardGallery = widthIsDynamic => {
  return (
    <CardGalleryItem
      title={'Card Title'}
      subtitle={'Card subtitle'}
      primaryActionProps={{
        label: 'Button',
        onClick: () => {
          alert('Primary action clicked');
        },
      }}
      secondaryActionProps={{
        label: 'Text link',
        onClick: () => {
          alert('Secondary action clicked');
        },
      }}
      backgroundImageUrl={backgroundImageUrl}
      width={widthIsDynamic && '300px'}
      height="300px"
      data-hook="storybook-card-gallery-item"
    />
  );
};

export default () => (
  <div className={styles.wrapper}>
    <Heading appearance="H4">Dynamic width</Heading>
    <Container>
      <Row>
        <Col span={4}>{generateCardGallery()}</Col>
        <Col span={4}>{generateCardGallery()}</Col>
        <Col span={4}>{generateCardGallery()}</Col>
      </Row>
    </Container>
    <Heading appearance="H4">Fixed width</Heading>
    <Container>
      <Row>
        <Col span={4}>{generateCardGallery(true)}</Col>
        <Col span={4}>{generateCardGallery(true)}</Col>
        <Col span={4}>{generateCardGallery(true)}</Col>
      </Row>
    </Container>
  </div>
);

import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'IoT & Robotics'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Custom 3D Prints'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Gifts & Accessories'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Prototyping & Parts'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;

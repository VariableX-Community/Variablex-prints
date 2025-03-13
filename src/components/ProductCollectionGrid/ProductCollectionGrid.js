import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'https://images.livemint.com/img/2024/04/18/1140x641/atlas-yellow-Boston-Dynamics_1713428339686_1713428339876.jpg'}
        title={'IoT & Robotics'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'https://cdn.prod.website-files.com/62c4d68e90d0ffdee61428d0/62c87ad4f413a52fdef03f8d_industries-served-toys-and-collectibles.jpg'}
        title={'Custom 3D Prints'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'https://3dreality.in/wp-content/uploads/2025/01/Personalized-3D-Printed-Gifts-for-Birthdays-1024x585.jpg'}
        title={'Gifts & Accessories'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'https://www.3dnatives.com/en/wp-content/uploads/sites/2/2024/04/RP-Parts-1.jpg'}
        title={'Prototyping & Parts'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;

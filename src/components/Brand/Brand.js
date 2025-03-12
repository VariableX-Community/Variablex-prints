import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      <svg width="187" height="30" viewBox="0 0 47 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.752 9.06H4.504L1.48 0.983999H0.868V0.599999H4.78V0.983999H3.916L6.052 6.972H6.076L8.044 0.983999H6.64V0.599999H9.352V0.983999H8.452L5.752 9.06ZM16.3358 8.616V9H12.4238V8.616H13.2878L12.6158 6.708H9.79581L9.15981 8.616H10.5638V9H7.83981V8.616H8.75181L11.4758 0.539999H12.7238L15.7238 8.616H16.3358ZM12.4838 6.324L11.1758 2.628H11.1518L9.92781 6.324H12.4838ZM24.6224 8.616V9H21.6944L20.8544 6.096C20.7504 5.752 20.6144 5.504 20.4464 5.352C20.2784 5.2 20.0344 5.124 19.7144 5.124H19.4744V8.616H20.4344V9H16.7384V8.616H17.3264V0.983999H16.7384V0.599999H20.5184C22.5264 0.599999 23.5304 1.356 23.5304 2.868C23.5304 3.452 23.3624 3.932 23.0264 4.308C22.6904 4.684 22.1624 4.932 21.4424 5.052C21.6984 5.084 21.9184 5.128 22.1024 5.184C22.2864 5.232 22.4424 5.3 22.5704 5.388C22.7064 5.468 22.8144 5.564 22.8944 5.676C22.9824 5.788 23.0544 5.916 23.1104 6.06L24.0104 8.616H24.6224ZM20.1704 4.776C20.5464 4.776 20.8264 4.636 21.0104 4.356C21.1944 4.076 21.2864 3.584 21.2864 2.88C21.2864 2.496 21.2624 2.184 21.2144 1.944C21.1664 1.696 21.0944 1.5 20.9984 1.356C20.9104 1.212 20.7944 1.116 20.6504 1.068C20.5144 1.012 20.3544 0.983999 20.1704 0.983999H19.4744V4.776H20.1704ZM25.0353 0.983999V0.599999H28.3473V0.983999H27.7713V8.616H28.3473V9H25.0353V8.616H25.6233V0.983999H25.0353ZM29.2054 4.8C29.2054 4.152 29.3174 3.564 29.5414 3.036C29.7734 2.508 30.0814 2.056 30.4654 1.68C30.8574 1.296 31.3054 1 31.8094 0.792C32.3214 0.584 32.8614 0.48 33.4294 0.48C33.9894 0.48 34.5254 0.584 35.0374 0.792C35.5494 1 35.9974 1.296 36.3814 1.68C36.7734 2.056 37.0814 2.508 37.3054 3.036C37.5374 3.564 37.6534 4.152 37.6534 4.8C37.6534 5.448 37.5374 6.04 37.3054 6.576C37.0814 7.104 36.7734 7.56 36.3814 7.944C35.9974 8.32 35.5494 8.612 35.0374 8.82C34.5254 9.02 33.9894 9.12 33.4294 9.12C32.8614 9.12 32.3214 9.02 31.8094 8.82C31.3054 8.612 30.8574 8.32 30.4654 7.944C30.0814 7.56 29.7734 7.104 29.5414 6.576C29.3174 6.04 29.2054 5.448 29.2054 4.8ZM31.5094 4.8C31.5094 5.216 31.5334 5.656 31.5814 6.12C31.6374 6.576 31.7334 7 31.8694 7.392C32.0134 7.776 32.2094 8.096 32.4574 8.352C32.7054 8.608 33.0294 8.736 33.4294 8.736C33.8294 8.736 34.1534 8.608 34.4014 8.352C34.6574 8.096 34.8534 7.776 34.9894 7.392C35.1334 7 35.2294 6.576 35.2774 6.12C35.3254 5.656 35.3494 5.216 35.3494 4.8C35.3494 4.384 35.3254 3.948 35.2774 3.492C35.2294 3.028 35.1334 2.604 34.9894 2.22C34.8534 1.828 34.6574 1.504 34.4014 1.248C34.1534 0.992 33.8294 0.864 33.4294 0.864C33.0294 0.864 32.7054 0.992 32.4574 1.248C32.2094 1.504 32.0134 1.828 31.8694 2.22C31.7334 2.604 31.6374 3.028 31.5814 3.492C31.5334 3.948 31.5094 4.384 31.5094 4.8ZM46.7087 0.599999V0.983999H45.6167V9H44.3687L39.6047 3.156V8.616H40.7207V9H38.2607V8.616H39.1967V0.983999H38.2607V0.599999H40.4327L45.2087 6.444V0.983999H44.0807V0.599999H46.7087Z" fill="black" />
      </svg>

    </div>
  );
};

export default Brand;

import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'https://res.cloudinary.com/dl8rjqcxk/image/upload/v1741875476/questions_zaqwju.jpg'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
        <div className={styles.section}>
  <span>Your Orders</span>
  <div className={styles.subSection}>
    <h3>Deliveries</h3>
    <p>
      To check the status of your order, please visit the "My Orders" section in your CapLock Account. 
      You will receive an email notification once your package has been dispatched. 
      If you don’t see it, kindly check your spam or junk folder.
    </p>
    <p>
      We aim to dispatch all orders within 24 hours of placement. However, during high-demand periods, 
      such as sales, processing may take longer. Please allow up to five additional business days for delivery.
    </p>
    <p>
      If you have any questions regarding your order, feel free to contact us at <b>support@caplock.in</b> 
      or call us at <b>+91 9713237896</b>.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3>Returns & Exchanges</h3>
    <p>
      To initiate a return or exchange, visit the "My Orders" section of your CapLock Account. 
      You will receive an email confirmation once your return request is processed.
    </p>
    <p>
      Returns and exchanges must be requested within 7 days of delivery. Items should be unused, in their 
      original packaging, and include all accessories. For assistance, contact <b>support@caplock.in</b>.
    </p>
  </div>
</div>

<div className={styles.section}>
  <span>Payment</span>
  <div className={styles.subSection}>
    <h3>Shipping Rates</h3>
    <p>
      Shipping rates vary based on your location and the weight of the order. 
      The exact shipping cost will be calculated at checkout.
    </p>
    <p>
      We offer free shipping on orders above a certain value within India. 
      International shipping rates may vary based on destination and import regulations.
    </p>
    <p>
      For any queries regarding shipping, contact <b>support@caplock.in</b> or call <b>+91 9713237896</b>.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3>Currency</h3>
    <p>
      Our website automatically selects the currency based on your location. You can also change this 
      manually from the currency selector.
    </p>
    <p>
      All payments within India are processed in Indian Rupees (₹). International transactions may be subject to 
      currency conversion charges by your payment provider.
    </p>
    <p>
      GST is included in all Indian orders. For international deliveries, additional import duties or taxes may apply.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3>Suspect Fraud?</h3>
    <p>
      We implement strict security measures to prevent fraudulent transactions. However, if you suspect unauthorized 
      use of your card, immediately contact your bank or card provider to secure your account.
    </p>
    <p>
      You can also report the issue to us at <b>support@caplock.in</b>, and we will work with your payment provider 
      to investigate and minimize any inconvenience.
    </p>
  </div>
</div>

        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;

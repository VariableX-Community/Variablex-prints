import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Introduction</h3>
        <p>
          CapLock, an innovative startup, is committed to protecting your
          privacy. We collect personal information when you interact with our
          website (caplock.netlify.app), whether for account registration,
          purchases, or inquiries about our 3D printing and custom fabrication
          services.
        </p>
        <p>
          This Privacy Policy outlines how we collect, use, and disclose your
          information when you engage with our services. Our practices comply
          with applicable data protection laws, ensuring transparency and
          security.
        </p>
        <p>
          By accessing our services, you agree to our Privacy Policy and Terms
          of Service. If you do not agree, please refrain from using our
          website.
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Data Collection and Use</h3>
        <p>
          Our services, including account creation and order placement, are not
          intended for individuals under the age of 13. If a user under 13
          attempts to register, we do not collect their personal information
          beyond blocking the registration attempt.
        </p>
        <p>
          If you are under 18, parental or guardian supervision is required to
          use our website. By accessing CapLock, you confirm that you are over
          18 or have permission from a legal guardian.
        </p>
        <p>
          We collect data such as contact details, order history, and browsing
          activity to enhance your experience and improve our services. We do
          not sell or share personal data without consent.
        </p>
      </div>

      <div className={styles.section}>
        <h3>3. User Responsibilities</h3>
        <p>
          Users must adhere to ethical and legal guidelines while using our
          services. The following activities are strictly prohibited:
        </p>
        <p>
          (a) Disrupting the functionality of our website or services, including
          hacking or unauthorized access;
        </p>
        <p>(b) Engaging in harassment, threats, or inappropriate behavior;</p>
        <p>
          (c) Misrepresenting identity or affiliation, impersonating another
          person, or using false credentials;
        </p>
        <p>
          (d) Infringing on copyrights, intellectual property, or disclosing
          confidential information without authorization;
        </p>
        <p>
          (e) Distributing, reproducing, or commercializing our content without
          written permission;
        </p>
        <p>
          (f) Sending unsolicited advertisements, spam, or promotional
          materials through our services;
        </p>
        <p>
          (g) Manipulating digital data headers to mislead recipients regarding
          the origin of communications ("spoofing").
        </p>
      </div>
    </div>
  );
};

export default Policy;

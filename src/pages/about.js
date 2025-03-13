import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'https://res.cloudinary.com/dl8rjqcxk/image/upload/v1741874345/aboutus_bg_ychniu.jpg'}
          title={`CapLock \n A Indian brand Since 2025`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded with a vision to revolutionize hardware accessibility,
              CapLock is a dynamic startup dedicated to providing high-quality
              3D-printed products, custom IoT solutions.{' '}
            </p>
            <br />
            <br />
            <p>
              We offer a one-stop platform where students can buy and sell past
              IoT and hardware projects, place custom 3D-printing orders, and
              access laser-cut acrylic sheets and wood cuttings. Our
              state-of-the-art 3D printers ensure precision and durability in
              every print.{' '}
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('https://res.cloudinary.com/dl8rjqcxk/image/upload/v1741871808/aboutus_jwu6ky.jpg')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                CapLock was built on the belief that hardware innovation should
                be accessible to all. Whether you need a prototype for your
                startup, a custom keychain, or precision-cut components, we make
                high-quality manufacturing simple and affordable.
              </p>
              <ol>
                <li>Quality Over Mass Production</li>
                <li>Supporting the Maker Community</li>
                <li>Bringing Ideas to Life</li>
              </ol>
              <img alt={'founder'} src={toOptimizedImage('https://res.cloudinary.com/dl8rjqcxk/image/upload/v1741872401/ourvalues_rcclaa.jpg')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                At CapLock, we are driven by a passion for quality and
                innovation. From high-precision 3D printing to laser-cut acrylic
                and wood, we use state-of-the-art technology to bring ideas to
                life. Our commitment to excellence ensures every product is
                crafted with precision, whether it's a custom prototype, an IoT
                component, or a personalized accessory.
              </p>
              <p>
                Designed and manufactured with meticulous attention to detail,
                our prints use premium, eco-friendly materials for durability
                and sustainability. Every piece we create is engineered to meet
                the highest standards, ensuring both functionality and aesthetic
                appeal.
              </p>
              <p>
                With a dedication to craftsmanship and over years of refining
                our process, CapLock continues to push the boundaries of what's
                possible in 3D printing and custom fabrication.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img
            alt={'shirt backwards'}
            src={toOptimizedImage('https://res.cloudinary.com/dl8rjqcxk/image/upload/v1741872945/sustainability1_pjmyvf.jpg')}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

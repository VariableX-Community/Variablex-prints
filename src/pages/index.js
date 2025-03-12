import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };
  const goToAbout = () => {
    navigate('/about');
  };
  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/22/2024/07/3DPRINTER-BANNER.jpg'}
        title={'Everything for Your Next Innovation'}
        subtitle={'Discover Custom 3D Prints & Innovative Projects'}
        ctaText={'Get 3D Prints'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Explore innovative{' '}
          <span className={styles.gold}>3D-printed projects</span> and custom
          designs crafted by students.
        </p>
        <p>
          From <span className={styles.gold}>IoT hardware</span> to personalized{' '}
          <span className={styles.gold}>gifts & accessories</span>, bring your
          ideas to life with CapLock!
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Just Launched'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer} style={{ marginTop: '100px' }}>
        <Hero
          image={toOptimizedImage('https://sintron-hk.com/cdn/shop/products/832609677_o_1024x1024@2x.jpg?v=1527381755')}
          title={`-30% off \n All Essentials`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>IOT & Robotics</Link>
          <Link to={'/shop'}>Custom 3d Prints</Link>

        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about CapLock'}
        quote={
          '“Innovation starts with an idea, and we’re here to bring it to life. At CapLock, we believe in creativity, precision, and making technology accessible to everyone.”'
        }
      />
      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/f6/23/f623e6ff-7d8a-49e8-8f2b-4b40c938596c/image1.png__1184x0_subsampling-2.png')}
          title={'We are Sustainable'}
          subtitle={
            'From minimizing waste to supporting student innovation, explore how we’re making 3D printing more efficient and eco-friendly.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
          ctaAction={goToAbout}
        />
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;

import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
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

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/22/2024/07/3DPRINTER-BANNER.jpg'}
        title={'Essentials for Your Next Big Idea'}
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

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('https://sintron-hk.com/cdn/shop/products/832609677_o_1024x1024@2x.jpg?v=1527381755')}
          title={`-30% off \n All Essentials`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Sydney'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @sydney to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img
            src={toOptimizedImage(`/social/socialMedia1.png`)}
            alt={'social media 1'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia2.png`)}
            alt={'social media 2'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia3.png`)}
            alt={'social media 3'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia4.png`)}
            alt={'social media 4'}
          />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;

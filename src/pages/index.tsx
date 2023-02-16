import * as React from 'react';
import { Header } from '../components/landing-page/Header';
import { About } from '../components/landing-page/About';
import { Beta } from '../components/landing-page/Beta';
import { Footer } from '../components/landing-page/Footer';
import { Team } from '../components/landing-page/Team';
import { Press } from '../components/landing-page/Press';
import { SEO } from '../components/seo';

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO />
      <Header />
      <About />
      <Beta />
      <Team />
      <Press />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

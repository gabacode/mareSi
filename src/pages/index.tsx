import * as React from 'react';
import { Helmet } from 'react-helmet';
import { meta as tags } from '../data/meta';
import { Header } from '../components/landing-page/Header';
import { About } from '../components/landing-page/About';
import { Beta } from '../components/landing-page/Beta';
import { Footer } from '../components/landing-page/Footer';
import { Team } from '../components/landing-page/Team';
const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet {...tags} />
      <Header />
      <About />
      <Beta />
      <Team />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
  path: `.env`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: `MareSì App - Acque di Balneazione`,
    description: `Scopri la qualità delle acque che ti circondano.`,
    siteUrl: `https://maresi.app`,
    image: `https://maresi.app/images/banners/logo.png`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: require('./src/theme'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
  ],
};

export default config;
